/* Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */

let stock = [
    { product: "Laptop", quantity: 3, minimum: 5 },
    { product: "Smartphone", quantity: 10, minimum: 8 },
    { product: "Tablet", quantity: 2, minimum: 4 },
    { product: "Monitor", quantity: 6, minimum: 6 }
]

stock.forEach(item => {
    if (item.quantity < item.minimum) {
        item.quantity *= 2
    }
})

console.log(stock)

