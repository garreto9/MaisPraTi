/* Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */

let transactions = [
    { type: "income", value: 1000 },
    { type: "expense", value: 200 },
    { type: "income", value: 500 },
    { type: "expense", value: 300 }
]

let finalBalance = 0

transactions.forEach(transaction => {
    if (transaction.type === "income") {
        finalBalance += transaction.value
    } else if (transaction.type === "expense") {
        finalBalance -= transaction.value
    }
})

console.log(`Saldo final: ${finalBalance}`)
