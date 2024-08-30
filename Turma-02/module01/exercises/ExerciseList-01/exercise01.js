/* Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

//Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir um número inteiro
let number = prompt("Digite um número inteiro: ")

// Converte a entrada para um número inteiro, caso o número inserido não seja
number = parseInt(number)

// Verifica se o número é par ou ímpar
if (number % 2 === 0) {
    console.log("O número " + number + " é par.")
} else {
    console.log("O número " + number + " é ímpar.")
}

