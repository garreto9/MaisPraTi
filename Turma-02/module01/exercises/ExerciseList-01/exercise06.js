/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Solicita ao usuário para inserir os lados do triângulo
let A = prompt("Digite o valor do lado A: ")
let B = prompt("Digite o valor do lado B: ")
let C = prompt("Digite o valor do lado C: ")

// Converte as entradas para números
A = Number(A)
B = Number(B)
C = Number(C)

// Verifica se os lados formam um triângulo
if (A < B + C && B < A + C && C < A + B) {
    // Verifica o tipo de triângulo
    if (A === B && B === C) {
        console.log("Os lados formam um triângulo equilátero.")
    } else if (A === B || A === C || B === C) {
        console.log("Os lados formam um triângulo isósceles.")
    } else {
        console.log("Os lados formam um triângulo escaleno.")
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.")
}


