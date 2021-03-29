const paragrafos = document.querySelectorAll('p')

console.log(paragrafos)

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item)=>{
  return acumulador + item.innerText.length
}, 0)

console.log(totalCaracteres)
console.log(paragrafos)

function criarElemento(tag,classe,conteudo){
  const elemento = document.createElement('div')
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML =conteudo : null
  return elemento
}

console.log(criarElemento('ul','ativo', 'Esse é o conteudo'))

const h1Titulo = criarElemento.bind(null, 'h1','titulo')

const cursoJS = h1Titulo('Cursos de JavaScript')

console.log(cursoJS)

console.log(h1Titulo('Cursos de HTML'))