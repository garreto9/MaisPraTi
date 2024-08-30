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
    idioma: ["Português", "Español", "English"],

      mostrarCaracteristicas: function(){
        return `O nome do livro é ${this.nome} e foi escrito por ${this.autor}`
    }
}

console.log(livro.mostrarCaracteristicas())



let carro = {
    modelo: "KIA",
    nome: "Stinger",
    ano: 2019,
    valor: "R$ 299.000,00 mil reais",

    details: function(){
        return `O ${this.modelo} ${this.nome} de ano ${this.ano} está a venda pelo valor de ${this.valor}`
    }
}

console.log(carro.details())



// FUNÇÃO CONSTRUTORA
function computador(processador, gpu, ram, armazenamento){
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.ligar = function(){
        console.log(`O ${this.processador} está funcionando!`)
    }
    
    this.mostrarEspecificacoes = function(){
        return `
            processador: ${this.processador}
            gpu: ${this.gpu}
            ram: ${this.ram}
            armazenamento: ${this.armazenamento}`
    }
}

let pc = new computador("i9", "RTX 4090", "16GB", "5000GB NVME")

console.log(pc.mostrarEspecificacoes())




// DESIGN PATTERNS - FÁBRICA DE OBJETOS?
function jogos(titulo, genero, anoLancamento, empresa){
    return{
        titulo,
        genero,
        anoLancamento,
        empresa
    }
}

let jogo1 = jogos("Dark Souls 3", "RPG de Ação", "2016", "FromSoftware")

console.log(jogo1)


// SINTAXE FOR IN
for(let key in jogo1){
    console.log(`${key}: ${jogo1[key]}`)
}

// SINTAXE FOR OF (funciona com estruturas interáveis)
const jogadores = ["Pelé", "CR7", "Messi"]

for(let jogador of jogadores){
    console.log(jogador)
}

