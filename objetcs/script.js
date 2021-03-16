var pessoa = {
  nome: 'Vinicius',
  idade: 20,
  profissao: 'Freelancer'
}

var quadrado = {
  lados: 4,
  area: function (lado){
    return lado * lado
  },
  perimetro: function (lado){
    return this.lados *lado;
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

Math.PI
Math.random()

var pi = Math.PI
console.log(Math.random)