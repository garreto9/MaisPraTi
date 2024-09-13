/* Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico. */

let employees = [
    { name: "Maria", position: "Developer", salary: 5000 },
    { name: "José", position: "Designer", salary: 3000 },
    { name: "Garibaldo", position: "Project Manager", salary: 7000 },
    { name: "Juriscreuza", position: "Data Analyst", salary: 4500 }
]

let specificValue = 4000

for (let employee of employees) {
    if (employee.salary > specificValue) {
        console.log(`Nome: ${employee.name}, Cargo: ${employee.position}, Salário: ${employee.salary}`)
    }
}

