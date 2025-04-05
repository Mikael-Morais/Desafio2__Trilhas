window.addEventListener("load", function() {
    const savedInformation = JSON.parse(localStorage.getItem("information"));

    if (savedInformation) {
        const dadosUsuario = document.getElementById("dados-usuario");

        dadosUsuario.innerHTML = `
            <p><strong>Nome:</strong> ${savedInformation.nome}</p>
            <p><strong>Data de Nascimento:</strong> ${savedInformation.dataNascimento}</p>
            <p><strong>CPF:</strong> ${savedInformation.cpf}</p>
            <p><strong>Sexo:</strong> ${savedInformation.sexo}</p>
            <p><strong>E-mail:</strong> ${savedInformation.email}</p>
            <p><strong>Telefone:</strong> ${savedInformation.telefone}</p>
            <p><strong>Endereço:</strong> ${savedInformation.rua}, ${savedInformation.numero}, ${savedInformation.cidade} - ${savedInformation.estado}</p>
            <p><strong>Curso:</strong> ${savedInformation.curso}</p>
            <p><strong>Trilha:</strong> ${savedInformation.trilha}</p>
        `;
    } else {
        document.getElementById("dados-usuario").innerHTML = "<p>Nenhum dado encontrado.</p>";
    }
});

function clear() {
    localStorage.removeItem("information");
    window.location.href = "index.html";
}