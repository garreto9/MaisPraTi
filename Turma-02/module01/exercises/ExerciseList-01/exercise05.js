/* Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir o peso (em kg) e a altura (em metros)
let weight = prompt("Digite seu peso em kg: ")
let height = prompt("Digite sua altura em metros (ex: 1.75): ")

// Calcula o IMC
let imc = weight / (height * height)

// Determina a categoria de peso
if (imc < 18.5) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Categoria: Baixo peso.")
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Categoria: Peso normal.")
} else if (imc >= 25 && imc < 29.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Categoria: Sobrepeso.")
} else {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Categoria: Obesidade.")
} 
