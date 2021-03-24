Object
String
Array
Function
Number

Window
history
Document
HTMLCollection
NodeList

if(typeof window.onafterprint !== "undefined"){
  console.log('Existe')
}

const comida = "pizza"

const frase = "A melhor comida é ";

const linguagem = "JavaScript"

console.log(frase[frase.length])

const FraseFinal = frase.concat(linguagem)

console.log(FraseFinal)

const fruta= 'Banana'
const listaFrutas = 'Melancia, Banana, laranja'

console.log(fruta.includes(listaFrutas))

console.log(fruta.startsWith('Ba'))

const transacao1 = 'Deposito de cliente'
const transacao2 = 'Deposito de fornecedor'
const transacao3 = 'Taxa de camisa'

console.log(transacao3.slice(-5))

const instrumento = 'Guitarra'

console.log(fruta.indexOf('B'))

const listaPrecos = ['R$ 99', 'R$ 199','R$ 12000']

listaPrecos.forEach((preco)=>{
  console.log(preco.padStart(10, '-'))
})

listaPrecos[0].padStart(10, '.') // aumenta a string para 10 caracteres
listaPrecos[0].padEnd(10, '.')

console.log(fruta.lastIndexOf('a'))

let listaItens = 'Camisa Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ')

console.log(listaItens)

const ArrayLista = listaItens.split(', ')

console.log(ArrayLista)

const htmlText = '<div>O melhor item</div>'
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')

console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)

const sexo1 = 'Feminino'
const sexo1 = 'feminino'
const sexo3 = 'FEMININO'



