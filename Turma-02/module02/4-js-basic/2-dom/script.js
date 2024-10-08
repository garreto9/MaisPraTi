let titulo = document.getElementById('titulo')
console.log(titulo.textContent)

titulo.textContent = ('Aula de JS Básico')
console.log(titulo.textContent)

titulo.innerHTML = 'Mudei Novamente o Título'

titulo.style.color = 'blue'

let botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    alert('Você clicou no Botão')
})

let novoParagrafo = document.createElement('p')
novoParagrafo.innerHTML = 'Este é um novo parágrafo criado via JS.'

document.body.appendChild(novoParagrafo)

let paragrafo = document.querySelector('.paragrafo')

paragrafo.remove()

