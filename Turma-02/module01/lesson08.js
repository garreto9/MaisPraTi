const prompt = require('prompt-sync')()

//exercício 1
// const num1 = Number(prompt('Digite um número: '))

// if (num1 > 0){
//     console.log('O número informado é positivo')
// } else if (num1 < 0){
//     console.log('O número informado é negativo')
// } else if (num1 === 0){
//     console.log('O número é 0.')
// } else {
//     console.log('Erro! Informe um número.')
// }


//exercício 2

// const year = Number(prompt('Informe um ano: '))

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`O ano ${year} é bissexto`)
//     } else {
//         console.log(`O ano ${year} não é bissexto`)
// }


//exercício 3

// let grade1 = Number(prompt('Informe a primeira nota: '))
// let grade2 = Number(prompt('Informe a segunda nota: '))
// let grade3 = Number(prompt('Informe a terceira nota: '))

// let avg = (grade1 + grade2 + grade3) / 3
// let concept

// if (avg >= 9){
//     console.log(`A média das notas é ${avg.toFixed()}`)
//     concept = 'A'
// } else if (avg <= 8){
//     console.log(`A média das notas é ${avg.toFixed()}`)
//     concept = 'B'
// } else {
//     console.log('É outra nota.')
// }

// console.log('O conceito do aluno é: ' + concept)


//exercício 4

// let age = Number(prompt('Informe a sua idade: '))

// let ageRange

// if (age >= 0 && age <= 12){
//     ageRange = 'Criança'
// } else if (age >= 13 && age <= 17){
//     ageRange = 'Adolescente'
// } else if (age >= 18 && age <= 64){
//     ageRange = 'Adulto'
// } else if (age >= 65){
//     ageRange = 'Idoso'
// }

// switch (ageRange) {
//     case 'Criança' :
//         console.log("Você é uma criança")
//         break
//     case 'Adolescente' :
//         console.log("Você é um(a) adolescente")
//         break
//     case 'Adulto' :
//         console.log("Você é um(a) adulto(a)")
//         break
//     case 'Idoso' :
//         console.log("Você é um idoso")
// }


//exercício 5

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp
// } while (b !== 0)

// const MDC = a

// console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)


//exercício 6

// let count = 0
// let num = 100

// do {
//     let primo = 0
//     for (let i = 1; i <= num; i++){
//         if (num % i === 0){
//             primo++
//         }
//     }

//     if (primo === 2){
//         console.log(num)
//         count++
//     }

//     num++
// } while (count < 50)



// INTRODUÇÃO A ARRAYS

let carros = Array()

carros[0] = 'Civic'
carros[1] = 10
carros[2] = true
carros['Hyago'] = '10'

let motos = Array('CBR', 'Ninja', 10)

let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']

// o .push adiciona um elemento no final do array
livros.push('Sherlock Holmes')

// o .unshift adiciona um elemento no começo do array
livros.unshift('1984')

// // o .pop remove um elemento no final do array
// livros.pop()

// // o .shift remove um elemento no começo do array
// livros.shift()

// // o .splice remove um elemento dada a posição do mesmo
// livros.splice(2)

// aqui seleciona a posição 2, o 0 seria não deletar e sim acrescentar, após, o elemento que será acrescentado
// se no lugar do 0 colocar 1, o elemento será substituído
livros.splice(2, 0, 'Animais Fantásticos')

console.log(livros)


