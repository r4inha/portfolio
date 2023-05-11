// Variáveis de escopo global 
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")

const cep = document.querySelector("#cep");

let nomeOk = false;
let emailOk = false;


function trocarFoto() {
    let foto = document.querySelector("#foto").src;
    console.log(foto)
    let cardGoku1 = "https://www.cartonionline.com/wordpress/wp-content/uploads/2023/02/goku-814x1024.jpg"
    let cardGoku2 = "https://i.pinimg.com/originals/df/74/95/df7495deca40e1039f00acb328338961.jpg";

    if (foto == cardGoku2) {
        document.getElementById('foto').src = cardGoku1;
    }
    if (foto == cardGoku1) {
        document.getElementById('foto').src = cardGoku2;
    }

}

function validarNome() {

    // Variáveis de escopo local
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome muito curto"
        txtNome.style.color = "red"
        nomeOk = false;
    } else {
        txtNome.innerHTML = "✔"
        txtNome.style.color = "green"
        nomeOk = true;
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validarEmailRegEx() {

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.match(regex)) {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    } else {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    }
}

function validarCep() {
    let isValidBRCepComHifen = /^[0-9]{5}-[0-9]{3}$/;
    let isValidBRCepSemHifen = /^[0-9]{5}[0-9]{3}$/;
    let txtCep = document.querySelector("#txtCep");

    if (cep.value.match(isValidBRCepComHifen)) {
        txtCep.innerHTML = "✔";
        txtCep.style.color = "green";
    } else if (cep.value.match(isValidBRCepSemHifen)) {
        txtCep.innerHTML = "✔";
        txtCep.style.color = "green";
    } else {
        txtCep.innerHTML = "Digite um CEP com 8 dígitos. Ex: XXXXX-XXX";
        txtCep.style.color = "red";
    }
}

function enviarFormulario() {
    if (nomeOk === true && emailOk === true) {
        alert(nome.value + ", obrigado pela sua mensagem!")
    } else {
        alert("Por favor preencha o formulário corretamente!")
    }
}

function consultarCep() {

    const url = `https://viacep.com.br/ws/${cep.value}/json/`

    fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => {
            document.getElementById("dados").innerHTML =
                jsonBody.logradouro + "\n" +
                jsonBody.bairro + "\n" +
                jsonBody.localidade + "\n" +
                jsonBody.uf
        })
        .catch((error) => {
            alert("CEP não encontrado!")
        })
}
