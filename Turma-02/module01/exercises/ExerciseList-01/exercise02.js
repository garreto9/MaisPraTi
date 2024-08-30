/* Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir a idade
let idade = prompt("Digite a sua idade: ")

// Converte a entrada para um número inteiro caso não seja
idade = parseInt(idade)

// Verifica a categoria da idade
if (idade >= 0 && idade <= 12) {
    console.log("Você é uma criança.")
} else if (idade >= 13 && idade <= 17) {
    console.log("Você é um adolescente.")
} else if (idade >= 18 && idade <= 64) {
    console.log("Você é um adulto.")
} else if (idade >= 65) {
    console.log("Você é um idoso.")
} else {
    console.log("Idade inválida.")
}
