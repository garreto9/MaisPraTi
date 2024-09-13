/* Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente. */

let orders = [
    { customer: "Joelia", product: "Laptop", quantity: 3 },
    { customer: "Bobie", product: "Smartphone", quantity: 2 },
    { customer: "Alice", product: "Tablet", quantity: 1 },
    { customer: "Carlo", product: "Monitor", quantity: 6 },
    { customer: "Vanesso", product: "Laptop", quantity: 3 }
]

let totalProductsByCustomer = {}

orders.forEach(order => {
    if (totalProductsByCustomer[order.customer]) {
        totalProductsByCustomer[order.customer] += order.quantity
    } else {
        totalProductsByCustomer[order.customer] = order.quantity
    }
})

console.log(totalProductsByCustomer)

