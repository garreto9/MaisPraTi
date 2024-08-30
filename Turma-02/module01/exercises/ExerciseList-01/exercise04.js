/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */


// Permite solicitar entradas de dados do usuário
const prompt = require('prompt-sync')()

// Exibe o menu de opções
console.log("Escolha uma opção:")
console.log("1. Dizer Olá")
console.log("2. Mostrar Data e Hora Atual")
console.log("3. Sair")

// Solicita ao usuário para escolher uma opção
let option = prompt("Digite o número da opção desejada: ")

// Implementa a lógica de cada opção usando switch-case
switch (option) {
    case '1':
        console.log("Olá! Como você está?")
        break
    case '2':
        let currentDate = new Date();
        console.log("Data e Hora Atual: " + currentDate)
        break
    case '3':
        console.log("Saindo... Até logo!")
        break
    default:
        console.log("Opção inválida. Por favor, escolha uma opção de 1 a 3.")
        break
}
