const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');

h1.innerHTML;
console.log(animaisLista.innerHTML)

const lista = document.querySelector('.animais-lista')

console.log(lista.children[lista.children.length-1]) // ultimo filho

console.log(
  lista.querySelector('li:last-child'))

console.log(lista.previousSibling)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

contato.replaceChild(mapa, titulo)

// contato.insertBefore(animais, mapa)

const novoh1 = document.createElement('h1')
novoh1.innerHTML ='Novo Título'
novoh1.classList.add('titulo')

mapa.appendChild(novoh1)

console.log(novoh1)