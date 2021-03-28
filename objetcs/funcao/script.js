function soma(n1,n2){
  return n1 + n2;
}

console.log(soma.length)

function darOi(nome,idade){
  console.log('Oi pra voce' + nome + idade)
  
}

darOi.call(null, 'André', 28)

window.marca = 'Carro'
window.ano = '2020'

function descricaoCarro(velocidade){
  console.log(this)
  console.log(window.marca + '' + window.ano + velocidade)
}

descricaoCarro.call({marca: 'Honda', ano: '2015'},100)

// const carros = ['Ford', 'Fiat', 'VW']
// const frutas = ['Banana', 'Uva', 'Pêra']

// carros.forEach.call(frutas, (item)=>{
//   console.log(item)
// })

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function (classe){
  console.log(this)
  this.element.classList.add(classe)
}

// const ul = new Dom('ul')
// const li ={
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar')

// ul.ativo.call(li, 'ativo')

const frutas = ['Uva', 'Maçã', 'Banana']

// Array.prototype.mostrarThis() = function() {
//   console.log(this)
// }

const li = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li, function(item){
  return item.classList.contains('ativo')
})
// console.log(ul)

console.log(filtro)

console.log(li)