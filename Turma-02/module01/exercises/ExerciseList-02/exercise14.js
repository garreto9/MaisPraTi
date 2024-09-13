/* Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

let company = {
    departments: [
        {
            name: "Engenharia",
            employees: ["Amanda", "Letícia"]
        },
        {
            name: "Marketing",
            employees: ["Joana", "Daniela"]
        },
        {
            name: "Vendas",
            employees: ["Ivone", "Pregone"]
        }
    ]
}

for (let i in company.departments) {
    let department = company.departments[i]
    for (let employee of department.employees) {
        console.log(`Funcionário: ${employee}, Departamento: ${department.name}`)
    }
}

