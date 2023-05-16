const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) =>{
    if (nome.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu nome! </p>";
        nome.foucus();
        return null;
    }
    if (email.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu email</p>"
        email.foucus();
        return null;
    }
    if (senha.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite sua senha</p>"
        senha.foucus();
        return null;
    }
    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
    nome: nome.value,
    email: email.value,
    senha: senha.value
    })
    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML = "<p> Parabéns, cadastro feito com sucesso </p>";

    setTimeout(() => {
        window.location.assign("login.html");
    }, 3000);
}