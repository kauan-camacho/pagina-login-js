// CONST DA FUNÇÃO ALERT
const overlay = document.getElementById('overlay')
const mensagem = document.getElementById('msg')
const titulo = document.getElementById('titulo')

// VARIAVEIS DA FUNÇÃO CADASTRAR
var nome = document.getElementById('txtnome')
var email = document.getElementById('txtemail')
var senha = document.getElementById('txtsenha')

//FUNÇÃO CADASTRAR
function cadastrar() {

    if(nome.value.length == '' || email.value.length == '' || senha.value.length == ''){
        AlertFalse();
    } else {
        AlertTrue();
    }
}

//FUNÇÃO ALERT TRUE (ALERT-VERDADE)
function AlertTrue(){

    titulo.innerHTML = 
    `<h2 id="blue">Cadastro Concluido</h2>`
    mensagem.innerHTML = 
    `Nome: ${nome.value}</br> E-mail: ${email.value}</br> Senha: ${senha.value}</br>`
    
    overlay.style.display = 'flex'
}

//FUNÇÃO ALERT FALSE (ALERT-FALSO)
function AlertFalse(){

    titulo.innerHTML = 
    `<h2 id="red">Falha</h2>`
    mensagem.innerHTML = 
    `Os dados estão faltando`
    
    overlay.style.display = 'flex'
}

//FUNÇÃO FECHAR ALERT
function fecharAlert(){
    overlay.style.display = 'none'
}