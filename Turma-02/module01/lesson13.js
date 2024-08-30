// PRÁTICA DE MANIPULAÇÃO DE OBJETOS


// FOR IN

let professor = {
    name: "Homem Lâmpada",
    subjetc: "Math",
    grades: {
        student1: 10.0,
        student2: 8.0,
        student3: 9.0
    }
}

let sumGrades = 0
let numberOfStudents = 0

for(let student in professor.grades){
    sumGrades += professor.grades[student]
    numberOfStudents++
}

let average = sumGrades / numberOfStudents

console.log(`A média da turma é: ${average.toFixed(2)}`)
console.log(average >= 6.0 
    ? `${professor.name} está acima da média`
    : `${professor.name} está abaixo da média`
)




// FOR OF

const library = [
    {title: "O Hobbit", author: "J. R. R. Tolkien", year: 1995},
    {title: "Harry Potter: Prisioneiro de Azkaban", author: "J. K. Rolling", year: 1999},
    {title: "Nárnia", author: "C. S. Lewis", year: 2010}
]

for(let book of library){
    if(book.year < 2000){
        console.log(`O livro ${book.title}, escrito por ${book.author}, foi publicado em ${book.year}.`)
    }
}





// FOR EACH

const movies = [
    {title: "Tropa de Elite", genre: "Militar"},
    {title: "Top Gun", genre: "Ação"},
    {title: "Interestelar", genre: "Sci-Fi"},
    {title: "O Senhor dos Anéis", genre: "Aventura"},
    {title: "Poderoso Chefão", genre: "Máfia"},
    {title: "Vingadores: Ultimato", genre: "Heróis"},
    {title: "Deadpool e Wolverine", genre: "Heróis"},
]

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filme do gênero ${genre}`)
}

