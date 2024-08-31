/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

let sum = 0
let counter = 0
let nmr

// Loop para receber números decimais até que o usuário digite 0
do {
    nmr = prompt("Digite um número decimal (ou 0 para sair): ")
    nmr = parseFloat(nmr)

    if (nmr !== 0) {
        if (isNaN(nmr)) {
            console.log("Por favor, insira um número decimal válido.")
        } else {
            sum += nmr
            counter++
        }
    }
} while (nmr !== 0)

// Calcula a média aritmética se pelo menos um número válido foi inserido
if (counter > 0) {
    let average = sum / counter
    console.log(`A média aritmética dos números inseridos é: ${average.toFixed(2)}`)
} else {
    console.log("Nenhum número válido foi inserido.")
}





