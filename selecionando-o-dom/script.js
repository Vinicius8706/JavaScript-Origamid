const animais = document.getElementById('animais')
console.log(animais.innerText)

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[1])

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('grid-section')

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML[0])
console.log(gridSectionNode[0])

gridSectionNode.forEach(function(item, index) {
  console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item){
  console.log(item)
})

const animaisClass = document.querySelectorAll('img')

console.log(animaisClass)

const imagem = document.querySelectorAll('img[src^="img/imagem"]')

console.log(imagem)

const href = document.querySelectorAll('[href^="#"]')

console.log(href)

const h2Animais = document.querySelector('animais-descricao h2')

console.log(h2Animais)

const paragrafos = document.querySelectorAll('p')

console.log(paragrafos[paragrafos.length - 1])