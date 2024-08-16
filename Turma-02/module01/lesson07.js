//EXERCÍCIO 1 - TABUADA

const prompt = require('prompt-sync')()

let multiplier = Number(prompt('Informe o número que você quer saber a tabuada: '))

for(let counter = 0; counter <= 10; counter++){
    console.log(`${multiplier} * ${counter} =`, multiplier * counter)
}


//IMPRIMIR OS VALORES PARES ENTRE 1 E 20
for(let i = 0; 1 <=20; i +=2){
    console.log(i)
}


//CALCULAR A SOMA DOS NÚMEROS DE 1 A 100
let sum = 0
for(let j = 1; j <= 100; j++){
    sum += j
}
console.log(sum)


//IMPRIMIR VALORES DE 1 ATÉ 20 EM ORDEM DECRESCENTE
for(let i = 10; i >= 1; i--){
    console.log(i)
}

//ESTRUTURA COM WHILE
let i = 10

while(i > 0){
    console.log(i)
    i--
}


//CALCULAR A SOMA DOS NÚMEROS DE 1 A 100 COM WHILE
let qVar = 0
let cont = 0

while(qVar <= 100){
    cont += qVar
    qVar++
}

console.log(cont)


//SOLICITAR NÚMEROS ATÉ SER INSERIDO UM NEGATIVO
let num

do{
    num = Number(prompt('Digite um número: '))
} while(num >= 0)



