// const carro = {
//   marca: 'Honda',
//   ano: 2018
// }


// const {marca, ano} =  carro;
// console.log(marca, ano)

// const cliente = {
//   nome:'Vinicius',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['VideoJS', 'Video HTML']
//     },
//     físicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// const {digitais, físicas, digitais:{livros, videos}} = cliente.compras

// console.log(livros)


const cliente = {
  nome: 'Vinicius',
  compras:10,
  email: 'fsvinicius9@gmail.com'
}

const {nome: nomeVinicius, email} = cliente;

console.log(email)

const frutas = ['Banana', 'Pera','Uva']

const [primeira,segunda,terceira]  = frutas;

console.log(primeira)


function handleKeyboard({key, keyCode}){
  console.log(key, keyCode)
}

docuemnt.addEventListener('keydown', handleKeyboard)