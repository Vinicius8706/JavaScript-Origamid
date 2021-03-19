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

var menu ={
  width: 800, 
  height: 50, 
  backgroundColor: '#84E', 
  metadeHeight(){
    return this.height /2 ;
  }
}

menu.backgroundColor ="#000000"

menu.color = 'blue'

var bg = menu.backgroundColor

var dadospessoais ={
  nome: 'Vinicius',
  sobrenome: "Silva",
  idade: 20, 
  profissao: 'Freela'
}

console.log(`${dadospessoais.nome} ${dadospessoais.sobrenome}`)

var carro = {
  preco: 3080,
  portas: 4,
  marca: 'Audi',
}

var cachorro = {
  raça: 'Labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return this.latir
    }else{
      return 'Nada'
    }
  }

}

var nome = 'André'

nome.length
nome.charAt(1)
nome.replace

var btn = document.querySelector('.btn')
btn.classList.add('active')

