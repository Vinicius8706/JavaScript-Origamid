function Pessoa(nome, sobrenome,idade){
  this.nome = nome;
  this.idade = idade;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

const vinicius = new Pessoa('Vinicius', 'Farias', 20)

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)