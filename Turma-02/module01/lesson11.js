// function showFunction(sucessCallback, errorrCallback){
//     if(false){
//         sucessCallback('Requisição bem sucedida')
//     } else {
//         errorrCallback('Erro na requisição')
//     }
// }

// let sucessCallback = function(message){
//     console.log(message)
// }

// let errorrCallback = (message) => {
//     console.log(message)
// }

// showFunction(sucessCallback, errorrCallback)



// let arrSum = function(arr){
//     let sum = 0

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     return sum
// }

// let arr = [10, 20, 40, 30]
// let sum = arrSum(arr)

// console.log(sum)




// function findMax(arr){
//     let max = arr[0]
        
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     } 
//   }
//     return max
// }

// console.log(findMax([1, 2, 3, 4, 5]))




let nome = 'Sujeito Cansado'

console.log('Sujeito'.length) // retorna o tamanho da string, no caso, 7 letras
console.log('Sujeito'.charAt(0)) // retorna o valor da string na posição especificada  
console.log(nome.indexOf('j')) // retorna a posição da string especificada

// console.log(nome.replace('Sujeito', 'Alguém')) // substitui e retorna o valor

console.log(nome.substr(8, 8)) // retorna o valor da posição e a quantidade especificada no .substr

console.log(nome.toUpperCase()) // coloca tudo em caixa alta
console.log(nome.toLowerCase()) // coloca tudo em minúscula

console.log('-' + nome.trim() + '-') // o .trim tira os espaços em branco nas extremidades




// MÉTODOS MATEMÁTICOS
console.log(Math.ceil(100.73)) // o .ceil arrendonda pra cima
console.log(Math.floor(100.73)) // o .floor arrendonda pra baixo
console.log(Math.round(100.73)) // o .round arredonda de forma mais lógica, estatisticamente falando
console.log(Math.sqrt(100)) // o .sqrt retorna a raiz quadrada do valor
console.log(Math.pow(100, 2)) // retorna a potencia
console.log(Math.cbrt(100)) // retorna a raiz cúbica do valor
console.log(Math.abs(100.20)) // retorna o número absoluto
console.log(Math.random()) // gera um número aleatório entre 0 e 1


// DATAS
let date = new Date()
console.log(date.getDate()) // retorna a data atual
console.log(date.getMonth() + 1) // o +1 é porque na programação se começa a contagem no 0, os meses são 12
console.log(date.getFullYear()) // retorna o ano completo
console.log(date.toString()) // retorna todas as informações de data do SO




