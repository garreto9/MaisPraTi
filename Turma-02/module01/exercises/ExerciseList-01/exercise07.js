/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir o número de maçãs compradas
let amount = prompt("Digite o número de maçãs compradas: ")

// Converte a entrada para um número inteiro
amount = Number(amount)

// Verifica se a amount é válida
if (isNaN(amount) || amount <= 0) {
    console.log("Por favor, insira uma quantidade válida de maçãs.")
} else {
    // Calcula o valor total da compra
    let price;
    if (amount < 12) {
        price = 0.30
    } else {
        price = 0.25
    }
    let total = amount * price

    // Exibe o valor total da compra
    console.log(`O valor total da compra é: R$ ${total.toFixed(2)}`)
}
    