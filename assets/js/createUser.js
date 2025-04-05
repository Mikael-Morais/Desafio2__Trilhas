const savedInformation = JSON.parse(localStorage.getItem("information"));
window.addEventListener("load", function () {
    console.log(savedInformation?.cpf);
    if (savedInformation) {
        let userCpf = document.querySelector("#userCpf");
        userCpf.value = savedInformation.cpf || '';
    } else {
        console.error("Nenhuma informação encontrada no localStorage ou CPF ausente.");
    }
});


document.querySelector(".formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm-password").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }
    
    alert(`Inscrição finalizada com sucesso, ${savedInformation.nome}!`);
    //localStorage.removeItem("information");
});    