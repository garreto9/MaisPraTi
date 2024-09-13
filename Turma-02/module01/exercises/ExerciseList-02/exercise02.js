/* Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto. */

let book = {
    title: "Segurança e Guerra Cibernéticas: O que todos precisam saber",
    author: ["Peter W. Singer", "Allan Friedman"],
    publicationYear: 2014,
    gender: "Romance"
}

let propertyExists = false

for (let property in book) {
    if (property === "editora") {
        propertyExists = true
        break
    }
}

if (!propertyExists) {
    book.publisher = "Desconhecida"
}

console.log(book)

