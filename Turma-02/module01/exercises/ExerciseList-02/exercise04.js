/* Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console */

let people = [
    { name: "Ana", age: 28, city: "São Paulo" },
    { name: "Bruno", age: 34, city: "Rio de Janeiro" },
    { name: "Carla", age: 25, city: "Belo Horizonte" },
    { name: "Diego", age: 40, city: "Porto Alegre" }
]

for (let person of people) {
    console.log(`Nome: ${person.name}, Idade: ${person.age}, Cidade: ${person.city}`)
}
