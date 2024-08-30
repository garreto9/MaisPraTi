/*Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir um número inteiro
let nmr = prompt("Digite um número inteiro: ")

// Converte a entrada para um número inteiro
nmr = Number(nmr)

// Verifica se a entrada é um número válido
if (isNaN(nmr)) {
    console.log("Por favor, insira um número inteiro válido.")
} else {
    // Escreve o número na tela 10 vezes
    for (let i = 1; i <= 10; i++) {
        console.log(nmr)
    }
}
