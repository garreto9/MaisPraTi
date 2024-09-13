/* Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes */

let movies = [
    { title: "Uma Linda Mulher", director: "Garry Marshall", releaseYear: 1990 },
    { title: "Nenhum Sistema Está a Salvo", director: "Baran bo Odar", releaseYear: 2014 },
    { title: "Interestelar", director: "Christopher Nolan", releaseYear: 2014 },
    { title: "A Teoria de Tudo", director: "James Marsh", releaseYear: 2015 }
]

let movieTitles = []

movies.forEach(movie => {
    movieTitles.push(movie.title)
})


console.log(movieTitles)

