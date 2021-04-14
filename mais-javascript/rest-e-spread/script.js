// function perimetroForma(lado,totalLados, ...listaArgumentos) {
//   console.log(listaArgumentos)
//   listaArgumentos.forEach(item => console.log(item))
// //   argArray.forEach(arg => {
// //     console.log(arg)
// //   })
//   return lado * totalLados
// }

// perimetroForma(10,20, 30, 'Oi', 'Teste')

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador=>{
    console.log(ganhador + ' ganhou um ' + premio)
  })
}

const ganhadores = ['Pedro','Marta', 'Maria']

anunciarGanhadores('Carro',...ganhadores)

const frutas = ['Banana','Pera', 'Morango']

const legumes = ['Cenoura', 'Batata']

const comidas = [...frutas,...legumes]

console.log(comidas)

const todosOsNumeros = [3,4,5,6,7,8,9,10,111,23,55,1190]
const numeroMaximo = Math.max(...todosOsNumeros)

console.log(numeroMaximo)

const btns = document.querySelectorAll('button')

const btnArray = Array.from(btns)

console.log(btns)

function createButton(background = 'blue',color = 'red') {
  background = background || 'blue'
  if(color === undefined){
    color = 'red'
  }
  const buttonElement = document.createElement('button')
  buttonElement.style.background= background
  buttonElement.style.color = color
  return buttonElement

}

const redButton = createButton('black', 'tomato')
