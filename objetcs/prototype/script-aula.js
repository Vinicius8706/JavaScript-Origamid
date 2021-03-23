function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function(){
    return 'Abraçou'
  }
  this.andar = function(){
    return 'Andou pelo objeto'
  }
}

var obj = {
  nome: 'Vinicius',
  idade: 20,
}

Pessoa.prototype.andar = function(){
  return this.nome +'Pessoa andou'
}

Pessoa.prototype.nadar = function(){
  return this.nome +'Pessoa nadar'
}




// console.log(Pessoa.prototype)

const pais = 'Brasil'
const cidade = new String('Rio')

pais.charAt(0)
cidade.charAt(0)
const listaAnimais= ['Cachorro', 'gato', 'cavalo']
const lista = document.querySelectorAll('li')

const array = Array.prototype.slice.call(lista) // call veremos depois
const array2 = Array.from(lista) // call veremos depois

Object.getOwnPropertyNames(array)

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar(){
    return true
  }
}


