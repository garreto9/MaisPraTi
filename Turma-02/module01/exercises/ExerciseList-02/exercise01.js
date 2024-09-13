/* Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console. */

let car = {
    mark: "KIA",
    model: "STINGER",
    year: 2019,
    color: "White"
}

for (let properties in car) {
    console.log(`${properties}: ${car[properties]}`)
}
