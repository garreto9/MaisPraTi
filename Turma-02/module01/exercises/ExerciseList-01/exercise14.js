/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir um número inteiro
let nmr = prompt("Digite um número inteiro para calcular o fatorial: ")

// Converte a entrada para um número inteiro
nmr = Number(nmr)

// Verifica se a entrada é um número válido
if (isNaN(nmr) || nmr < 0){
    console.log("Por favor, insira um número inteiro não negativo válido.")
} else {
    // Variável para armazenar o fatorial
    let fatorial = 1

    // Calcula o fatorial usando um loop for
    for (let i = 1; i <= nmr; i++){
        fatorial *= i
    }

    // Exibe o resultado
    console.log(`O fatorial de ${nmr} é: ${fatorial}`)
}
