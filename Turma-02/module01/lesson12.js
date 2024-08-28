// let serie = {
//     nome: "The Boys",
//     genero: "Ação, Paródia, Heróis",
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificação: '+18',
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },

//     mostrarCaracteristicas: function(){
//         return `O nome da série é ${this.nome} e sua classificação é ${this.classificação}`
//     }
// }

// console.log(serie.mostrarCaracteristicas())




let livro = {
    nome: "A Guerra dos Tronos",
    genero: ["Romance", "Literatura Fantástica", "Alta Fantasia", "Ficção Política"],
    dataLancamento: 1996,
    autor: "George R. R. Martin",
    statusLeitura: "Em andamento",
    paginas: 592,
    tipo: ["Digital", "Físico"],
    idioma: ["Português", "Español", "English"]
},
    
    mostrarCaracteristicas: function(){
      return ("O livro " + this.nome + "foi escrito por " + this.autor)
    }
}

console.log(livro.mostrarCaracteristicas())

