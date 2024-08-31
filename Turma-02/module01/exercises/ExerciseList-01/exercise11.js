/* Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */


//  Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Variável que irá armazenar a soma total
let sum = 0;

// Loop para solicitar 5 números ao usuário
for (let i = 1; i <= 5; i++){
    // Solicita ao usuário para inserir um número
    let nmr = prompt(`Digite o número ${i}: `)
    
    // Converte a entrada para um número
    nmr = Number(nmr)
    
    // Verifica se a entrada é um número válido
    if (isNaN(nmr)){
        console.log("Por favor, insira um número válido.")
        i-- // Decrementa o contador para repetir a solicitação
    } else {
        // Adiciona o número à soma total
        sum += nmr
    }
}

// Exibe a soma total
console.log(`A soma total dos números é: ${sum}`)


