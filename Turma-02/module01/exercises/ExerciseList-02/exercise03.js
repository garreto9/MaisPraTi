/* Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */


function filterProperties(product, specificValue) {
    let newObjet = {}

    for (let property in product) {
        if (product[property] > specificValue) {
            newObjet[property] = product[property]
        }
    }

    return newObjet
}

let product = {
    price: 150,
    weight: 2,
    amount: 10,
    discount: 5
}

let specificValue = 5
let result = filterProperties(product, specificValue)

console.log(result)

