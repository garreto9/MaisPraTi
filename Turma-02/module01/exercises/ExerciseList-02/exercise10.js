/* Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */

let sales = [
    { product: "Laptop", quantity: 2, price: 3000 },
    { product: "Smartphone", quantity: 5, price: 2000 },
    { product: "Tablet", quantity: 3, price: 1500 },
    { product: "Monitor", quantity: 4, price: 800 }
]

let totalSalesValue = 0

sales.forEach(sale => {
    totalSalesValue += sale.quantity * sale.price
})

console.log(`Valor total de vendas: ${totalSalesValue}`)
