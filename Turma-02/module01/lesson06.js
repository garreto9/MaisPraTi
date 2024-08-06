/*let usr = "Patonelson"
let key = "Pato123"

let auth = usr === 'Patonelson' && key === 'Pato123'

console.log(auth)
*/


/*const grade = 70

if(grade >= 60){
    console.log('Aprovado!')
} else{
    console.log('Reprovado!')
}
*/



// Inscrição para concurso com faixa etária permitida entre 18 e 32 anos
/*let age = 18

if((age >= 18) && (age <=32)) {
    console.log('Permitido a inscrição!')
} else {
    console.log('Não permitido a inscrição!')

}
*/



//EXERCÍCIO 1
/*let nmr = 9

if(nmr % 2 === 0){
    console.log('O número ' + nmr + " é par!")
} else {
    console.log('O número ' + nmr + ' é impar!')
}


//PROFESSOR FEZ
let num1 = 19
    
num1 % 2 === 0 ? console.log('PAR!') : console.log('ÍMPAR!')
*/


//EXERCÍCIO 2
/*let num1 = 2
let num2 = 5
let num3 = 3

if ((num1 > num2) && (num1 > num3)) {
    console.log("O primeiro numero é maior")
} else if ((num2 > num1) && (num2 > num3)) {
    console.log("O segundo numero é maior")
} else if ((num3 > num1) && (num3 > num2))  {
    console.log("O terceiro numero é maior")
}

*/


//EXERCÍCIO 3
const prompt = require('prompt-sync')()

let num1 = Number(prompt("Insira o primeiro valor: "))
let num2 = Number(prompt("Insira o segundo valor: "))
let operation = prompt("Informe a operação desejada (+, -, /, *): ")
let result = 0

if(operation === '+'){
    result = num1 + num2
} else if(operation === '-'){
    result = num1 - num2
} else if(operation === '*'){
    result = num1 * num2
} else if(operation === '/'){
    if(num2 !== 0){
        result = num1 / num2
    } else {
        console.log("Erro: divisão por zero!")
        result = undefined
    }
} else {
    console.log('Operação Inválida!')
    result = undefined
}

if(result !== undefined){
    console.log("Resultado: ", result)
}