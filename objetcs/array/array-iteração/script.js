const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetosCurso = arrayCursos.map((curso)=>{
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    return{
        titulo, descricao, aulas, horas
    }
})

console.log(objetosCurso)

const numeros = [3,44, 333, 23, 122, 322, 33]

const maioresque100 = numeros.filter(n => n  > 100)

console.log(maioresque100)

const instrumentos = ['Guitarra','Baixo','Bateria','Teclado']

const acharBaixo = instrumentos.some((item)=>{
    return item === 'Baixo'
})

console.log(acharBaixo)

const compras = [
    {
        item:'Banana',
        preco: 'R$ 4,99'
    },
    {
        item:'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item:'Carne',
        preco: 'R$ 25,49'
    },
    {
        item:'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item:'Queijo',
        preco: 'R$ 10,60'
    },
]

const valorTotal = compras.reduce((acumulador, item)=>{
    const precoLimpo = +item.preco.replace('R$ ','').replace(',','.')
    return acumulador + precoLimpo
    
},0)

console.log(valorTotal)