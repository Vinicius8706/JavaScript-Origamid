//Exercicios

const comidas = ['Pizza','Frango','Carne','Macarrão']

const primeiroElemento = comidas.shift()

console.log(primeiroElemento)

const ultimoElemento = comidas.pop()
 console.log(ultimoElemento)

const adiciona = comidas.push('Arroz')

console.log(comidas)

const adicionaInicio = comidas.unshift('Maçã')

console.log(adicionaInicio)

const estudantes = ['Marcio', 'Brenda', 'Joana','Kleber','Julia']

const ordem = estudantes.sort()
console.log(ordem)
const inverte = estudantes.reverse()
console.log(inverte)
const searchJoana = estudantes.indexOf('Joana')
console.log(searchJoana)

const searchJu = estudantes.indexOf('Juliana')
console.log(searchJu)

let html = `<section>
                  <div>Sobre</div>
                  <div>Produtos</div>
                  <div>Contato</div>
              </section>`

const substituir = html.split('section').join('ul')

const substituir2 = substituir.split('div').join('li')


console.log(substituir2)

const carros = ['Ford', 'Fiat', 'VW', 'Honda']

const arrayNovo = carros.shift()

console.log(carros)