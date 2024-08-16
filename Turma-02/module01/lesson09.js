// // EXERCICIO 1 - SOMA DOS ELEMENTOS DE UM ARRAY
// let sum = 0
// let arr = [10, 20, 30, 40]

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// } 

// console.log(sum)



// // EXERCICIO 2 - ENCONTRAR MAIOR NÚMERO DE UM ARRAY
// let max = arr[0]

// for(let coluna = 0; coluna < arr.length; coluna++){
//     if(arr[coluna] > max){
//         max = arr[coluna]
//     }
// }

// console.log(max)



// // EXERCICIO 3 - REVERTER UM ARRAY
// let reversed = []

// for(let k = arr.length -1; k >=0; k--){
//     reversed.push(arr[k])
// }

// console.log(reversed)



// // EXERCICIO 4 - CRIAR UM ARRAY CONTENDO APENAS NÚMEROS PARES
// let evens = []

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 === 0){
//         evens.push(arr[m])
//     }
// }

// console.log(evens)


// // EXERCICIO 5 - CONTAR OCORRENCIAS DE VALOR, QUANTAS VEZES UM VALOR SE REPETIU
// let vet = [10, 10, 7, 5, 10]
// let value = 10
// let count = 0

// for(let l = 0; l < vet.length; l++){
//     if(vet[l] === value){
//         count++
//     }
// }

// console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)




// Arrays/Vetores multidimensionais
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// console.table(matriz) //mostra uma tabela da matriz

// console.log(matriz[1][1]) //mostra o valor pela linha e coluna em que está

// for(let linha = 0; linha < matriz.length; linha++){
//     for(let coluna = 0; coluna < matriz[linha].length; coluna++){
//         console.log(`Elemento na posição [${linha}][${coluna}]: ${matriz[linha][coluna]}`)

//     }
// }



//CRIAR DUAS MATRIZES E SOMÁ-LAS
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado = []

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
    throw new error ('Os arrays devem ter o mesmo tamanho!')
}

for(let i = 0; i < arr1.length; i++){
    let somaLinha = []
    for(let j = 0; j < arr1[i].length; j++){
        somaLinha.push(arr1[i][j] + arr2[i][j])
    }
    resultado.push(somaLinha)
}
console.table(resultado)


