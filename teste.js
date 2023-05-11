// ----------------------- Hello World ---------------------------

console.log("Hello World")

// ------------------------------- Declaração de variáveis -------------------------------

let nome = "Bianca"   // Variável (modificável)  --  Semelhante a "var", mas local
const sobrenome = "Francis"   // Constante (não modificável)

console.log(nome + " " + sobrenome)

// ---------------------- Soma ----------------------------

let numero1 = 10
let numero2 = 5

console.log(numero1 + numero2)

// ---------------- Uso de funções ----------------

function dividir(num1, num2){
    if (num2 === 0){
        return "Não é possível dividir por zero."    // Retorna uma string
    }
    
    return num1/num2    // Retorna um número
}

console.log(dividir(10, 5))

// ---------------------- Arrow Function -- Parecido com Lambda ----------------------

const soma = (num1, num2) => num1 + num2

console.log(soma(1,2))    // Chamando a constante como se fosse uma função

// --------------------- Interpolação de string ---------------------

function tabuada(num1){
    for (let contador = 1; contador <= 10; contador++){
        console.log(`${num1} x ${contador} = ${num1 * contador}`)  // Sem concatenar
    }
}

tabuada(5)

// -------------------------- Vetores --------------------------

const nomes = ["Bianca", "Deizi", "Yngrid"]

nomes.forEach(nome => console.log(nome)) // Impressão usando Arrow Function

// ------------------------------------------------------