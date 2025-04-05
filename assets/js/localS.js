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