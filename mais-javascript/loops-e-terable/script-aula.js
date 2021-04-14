const frutas = ['Banana', 'Morango','Uva']
const frase = 'Isso é JavaScript'

// for(const fruta of frutas){
//   console.log(fruta)
// }

// for(const char of frase){
//   console.log(char)
// }

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(({response}) => console.log(response))


const buttons = document.querySelectorAll('button')

for(const btn of buttons){
  btn.style.color = 'Blue';
}

console.log(...buttons)


const carro = {
  marca: 'Honda', ano: '2018'
}



Object.defineProperties(carro, {
  rodas: {value:4, enumerable: true},
})

for(const key in carro){
  console.log(carro[key])
}

for(const f in frutas){
  console.log(f)
}

const btnUnico = document.querySelector('button')

const btnStyles = getComputedStyle(btnUnico)

for(const style in btnStyles){
console.log(`${style} ${btnStyles[style]}`)
}