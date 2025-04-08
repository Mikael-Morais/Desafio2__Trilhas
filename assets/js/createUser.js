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
        document.querySelector("#password").value = '';
        document.querySelector("#confirm-password").value = '';
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }
    window.location.href='login.html';
    //alert(`Inscrição finalizada com sucesso, ${savedInformation.nome}!`);
    //localStorage.removeItem("information");

    const login = {
        user: savedInformation.cpf,
        senha: document.querySelector("#password").value,
    };
    localStorage.setItem("login", JSON.stringify(login));
});    

function verify() {
    const dataSaved = JSON.parse(localStorage.getItem("login"));
    const usuario = document.querySelector("#usuario").value;
    const sen = document.querySelector("#senha").value;
    if (usuario === dataSaved.user && sen === dataSaved.senha) {
        window.location.href = "final.html";
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}