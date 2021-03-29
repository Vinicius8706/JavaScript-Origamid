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

const filtro = Array.prototype.filter.bind(li, function(item){
  return item.classList.contains('ativo')
})
// console.log(ul)

console.log(filtro)

console.log(li)

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
}

const numeros = [3,4,6,1,34,44,32]

Math.max.apply(null, numeros) //os argumentos da função sao passados através de um array

const $ = document.querySelectorAll.bind(document, 'li')
const carro = {
  marca: 'Ford', 
  ano: 2018, 
  acelerar: function(aceleracao, tempo){
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}

console.log(carro)

const honda = {
  marca:  'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda)

console.log(acelerarHonda(300,20))
