const btn = document.querySelector('button')
const btnStyles = window.getComputedStyle(btn)

const {backgroundColor, margin, color} = btnStyles

console.log(backgroundColor)
console.log(margin)
console.log(color)

let cursoAtivo = 'JavaScript'
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

console.log(cursoAtivo, cursoInativo)

const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'amarelo'
}

const {cor: bobCor} = cachorro