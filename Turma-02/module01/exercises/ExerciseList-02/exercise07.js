/* Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */

let products = [
    { name: "Laptop", price: 3000, discount: 0.1 },
    { name: "Smartphone", price: 2000, discount: 0.1 },
    { name: "Tablet", price: 1500, discount: 0.1 },
    { name: "Monitor", price: 800, discount: 0.1 }
]

products.forEach(product => {
    let discount = product.price * product.discount
    let newPrice = product.price - discount
    console.log(`Nome: ${product.name}, Novo Preço: ${newPrice.toFixed(2)}`)
})


