const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');

h1.innerHTML;
console.log(animaisLista.innerHTML)

const lista = document.querySelector('.animais-lista')

console.log(lista.children[lista.children.length-1]) // ultimo filho

console.log(
  lista.querySelector('li:last-child'))

console.log(lista.previousSibling)