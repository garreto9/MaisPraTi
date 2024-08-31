/* Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

// Inicializa os dois primeiros números da sequência de Fibonacci
let a = 0;
let b = 1;

// Exibe os dois primeiros números
console.log(a);
console.log(b);

// Gera e imprime os próximos 8 números da sequência de Fibonacci
for (let i = 3; i <= 10; i++) {
    let next = a + b
    console.log(next)
    a = b
    b = next
}


