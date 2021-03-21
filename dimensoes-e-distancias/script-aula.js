const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight

console.log(height)

const animaisTop = listaAnimais.offsetTop; // distancia do topo para os animais
const primeiroh2 = document.querySelector('h2'); 

const h2left = primeiroh2.offsetLeft
console.log(h2left)

const rect = primeiroh2.getBoundingClientRect()

console.log(rect)

if(rect, top < 0 ){
  console.log('Passou do elemento')
}

console.log(window.innerWidth, window.outerWidth)

const small = window.matchMedia ('(max-width: 600px)').matches

if(small){
  console.log('Tela menor que 600px')
}else{
  console.log('Tela menor que 600px')
}
