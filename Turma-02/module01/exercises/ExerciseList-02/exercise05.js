/* Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média. */

let students = [
    { name: "Alice", note1: 8, note2: 7 },
    { name: "Bruno", note1: 6, note2: 5 },
    { name: "Carla", note1: 9, note2: 8 },
    { name: "Diego", note1: 7, note2: 6 }
]

for (let student of students) {
    let average = (student.note1 + student.note2) / 2
    console.log(`Nome: ${student.name}, Média: ${average}`)
}
