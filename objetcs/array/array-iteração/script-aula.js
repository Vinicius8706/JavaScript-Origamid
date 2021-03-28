// const carros = ['Ford','Fiat','Honda']

// carros.forEach(function(item,index,array){
//     console.log(item.toUpperCase())
// })

// const li = document.querySelectorAll('li')

// li.forEach(item => {item.classList.add('ativa')})

// const novaArray = carros.map((item,index,array)=>{
//     console.log(item.toUpperCase(),index,array)
//     return item;
// })

// console.log(novaArray)
// const numeros = [2,4,5,6,78]

// const numerosX2 = numeros.map(n => n *2)

// console.log(numerosX2) // Se o objetivo for mudar os valores da array atual, sempre utilizar o map, pois assim uma nova array com os valores modificados retornado e voce pode imediatamente iterar novamente estes valores.

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },

// ]

// const tempoAulas = aulas.map(aula => aula.min)

// console.log(tempoAulas)

// function nomeAulas(aula){
//     return aula.nome;
// }

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log(arrayNomeAulas)

// const aulas = [10,25,30]

// const total1 = aulas.reduce((acumulador, item,index,array) => {
//     console.log(acumulador,item,index,array)
//     return acumulador + item
// }, 33)

// const numeros = [10,25,30, 3,54,33,22]

// const maiorNumero = numeros.reduce((anterior,atual)=>{
//     if(anterior < atual) {
//         return anterior
//     } else{
//         return atual
//     }

// })

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const listaAulas =aulas.reduce((acumulador, atual,index,array)=>{
    
    acumulador[index]= atual.nome
    console.log(acumulador)
    return acumulador
},{})


// const temUva = frutas.some((item)=>{
//     console.log(item)
//     return item === 'Uva'
// })

// console.log(temUva)
// const temUva = frutas.every((item)=>{
//     console.log(item)
//     return item === 'Uva'
// })

// const numeros = [6,43,22,88,101,29] 
// const maiorQue3 = numeros.every(function(n){
//     return n >= 6
// })

// console.log(maiorQue3)

const frutas = ['Banana','Pera','Uva','Maçã']

const buscaUva = frutas.findIndex((fruta)=>{
    return fruta === 'Uva'
})

console.log(buscaUva)

const numeros = [6,43,22,88,101,29]

const aulas1 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const maiores15 = aulas.filter((aula)=>{
    // console.log(aula.min)
    return aula.min >15;
})

console.log(maiores15)