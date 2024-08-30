/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir os dois valores
let value1 = prompt("Digite o primeiro valor: ")
let value2 = prompt("Digite o segundo valor: ")

// Converte as entradas para números
value1 = Number(value1)
value2 = Number(value2)

// Verifica se os valores são diferentes
if (value1 === value2) {
    console.log("Os valores não podem ser iguais. Por favor, insira valores diferentes.")
} else {
    // Escreve os valores em ordem crescente
    if (value1 < value2) {
        console.log("Os valores em ordem crescente são: " + value1 + ", " + value2)
    } else {
        console.log("Os valores em ordem crescente são: " + value2 + ", " + value1)
    }
}



