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




console.log(Pessoa.prototype)
