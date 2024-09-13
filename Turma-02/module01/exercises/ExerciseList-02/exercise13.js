/* Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */


let cart = {
    items: [
        { name: "Laptop", quantity: 2, unitPrice: 3000 },
        { name: "Smartphone", quantity: 1, unitPrice: 2000 },
        { name: "Tablet", quantity: 3, unitPrice: 1500 }
    ]
}

let totalValue = 0

cart.items.forEach(item => {
    totalValue += item.quantity * item.unitPrice
})

console.log(`Valor total do carrinho: ${totalValue}`)

