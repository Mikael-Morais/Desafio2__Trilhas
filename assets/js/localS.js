const form = document.querySelector('.formulario');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const information = {
            nome: document.getElementById('nome').value,
            dataNascimento: document.getElementById('dataNascimento').value,
            cpf: document.getElementById('cpf').value,
            sexo: document.getElementById('sexo').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            rua: document.getElementById('rua').value,
            numero: document.getElementById('numero').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
            instituicao: document.getElementById('instituicao').value,
            curso: document.getElementById('curso').value,
            cartainteresse: document.getElementById('cartainteresse').value,
            trilha: document.querySelector('input[name="trilha"]:checked')?.value || '',
            termos: document.getElementById('termos').checked
    };
    const cpfInput = document.querySelector("#cpf");
    const cpf = cpfInput.value;

    if (!validarCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        cpfInput.focus();
        return;
    }
    if (!validarData(document.getElementById("dataNascimento"))) {
        return;
    }
    localStorage.setItem("information", JSON.stringify(information));
    window.location.href = "verify.html";

});

window.addEventListener("load", function() {
    const savedInformation = JSON.parse(localStorage.getItem("information"));
    if (savedInformation) {
        document.getElementById('nome').value = savedInformation.nome || '';
        document.getElementById('dataNascimento').value = savedInformation.dataNascimento || '';
        document.getElementById('cpf').value = savedInformation.cpf || '';
        document.getElementById('sexo').value = savedInformation.sexo || '';
        document.getElementById('email').value = savedInformation.email || '';
        document.getElementById('telefone').value = savedInformation.telefone || '';
        document.getElementById('cep').value = savedInformation.cep || '';
        document.getElementById('rua').value = savedInformation.rua || '';
        document.getElementById('numero').value = savedInformation.numero || '';
        document.getElementById('cidade').value = savedInformation.cidade || '';
        document.getElementById('estado').value = savedInformation.estado || '';
        document.getElementById('instituicao').value = savedInformation.instituicao || '';
        document.getElementById('curso').value = savedInformation.curso || '';
        document.getElementById('cartainteresse').value = savedInformation.cartainteresse || '';

        if (savedInformation.trilha) {
            const trilhaInput = document.querySelector(`input[name="trilha"][value="${savedInformation.trilha}"]`);
            if (trilhaInput) {
                trilhaInput.checked = true;
            }
        }

        document.getElementById('termos').checked = savedInformation.termos || false;
    }
});

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}


function validarData(data_input) {
    const idadeMinima = 16;
    let dataMinima = new Date();
    dataMinima.setFullYear(dataMinima.getFullYear() - idadeMinima);
    const input = data_input;
    const dataSelecionada = new Date(input.value);
    const hoje = new Date;

    if (isNaN(dataSelecionada.getTime()) || dataSelecionada > hoje) {
        alert("Data inválida. Por favor, insira uma data válida.");
        input.focus();
        return false
    }
    if (dataSelecionada > dataMinima) {
        alert("Apenas maiores de 16 anos, ou que completarão 16 anos neste ano, podem se inscrever");
        input.focus();
        return false
    }
    return true
}