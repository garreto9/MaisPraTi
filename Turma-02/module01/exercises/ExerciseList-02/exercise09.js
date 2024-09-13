/* Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos. */

let customers = [
    { name: "Joaquina", age: 28, city: "São Luís" },
    { name: "Alice", age: 34, city: "Marabá" },
    { name: "Mortadela", age: 25, city: "Paraupebas" },
    { name: "Jujuba", age: 40, city: "Riachão" }
]

let countOver30 = 0

customers.forEach(customer => {
    if (customer.age > 30) {
        countOver30++
    }
})

console.log(`Número de clientes com mais de 30 anos: ${countOver30}`)
