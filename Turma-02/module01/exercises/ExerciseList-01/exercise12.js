/* Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */


// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir um número
let nmr = prompt("Digite um número para ver a tabuada: ")

// Converte a entrada para um número
nmr = Number(nmr)

// Verifica se a entrada é um número válido
if (isNaN(nmr)){
    console.log("Por favor, insira um número válido.")
} else {
    // Exibe a tabuada de 1 a 10
    console.log(`Tabuada do ${nmr}: `)
    for (let i = 1; i <= 10; i++) {
        console.log(nmr + " x " + i + " = " + (nmr * i))
    }
}



