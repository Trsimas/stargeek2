const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) =>{
  
    if (email.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu email</p>"
        email.focus();
        return null;
    }
    if (senha.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite sua senha</p>"
        senha.focus();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("dados")) || [];

    dados.forEach(elemento => {
        if (elemento.email == email.value && elemento.senha == senha.value){
            mensagem.innerHTML = "Estou te enviando pro catalogo";
            evento.preventDefault();
            setTimeout(()=>{
                window.location.assign("catalogo.html")
            }, 3000)
        } else {
            mensagem.innerHTML = "Senha inválida";
            evento.preventDefault();
        }
    });
    
}