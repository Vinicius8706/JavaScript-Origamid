const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}]]

function andar(nome) { console.log(nome)}


// const carros=  new Array('Ford', 'Fiat', 'Honda')

// carros[2]= 'Ferrari'

// console.log(carros)

const li = document.querySelectorAll('li')

const arrayLi = Array.from(li)

const obj = {
  0: 'VInicius',
  1: 'Rafael',
  2: 'Teste',
  length: 3,
}

console.log(li)
console.log(arrayLi)

const objArray = Array.from(obj)

Array.of(10)
const idades = [32,21,33,43,1,12,8]
const instrumentos =['Guitarra', 'Baixo', 'Violão']
// console.log(instrumentos.sort())

// console.log(idades.sort())

 const carros =  [ 'Ford', 'Fiat', 'VW']
// carros.unshift('Ferrari', 'Kia')

// carros.push('Cria')
// console.log(carros)

carros.splice(1,1,'Kia','Mustang')

console.log(carros)

// console.log(['Item 1','Item 2','Item 3','Item 4','Item 5'].copyWithin(2,0 ,2))// a partir do item 2 faz uma copia 

console.log(['Item 1','Item 2','Item 3','Item 4','Item 5'].fill('Banana'))

const transporte1 = ['Barco','Aviao']

const transporte2 = ['Carro','Moto']
const transportes = transporte1.concat(transporte2)

console.log(transportes)

let htmlString = '<h2>Titulo Principal</h2>'
htmlString = htmlString.split('h2').join('a')

