function Dom(seletor){  
  this.element =  function(){
    return document.element.querySelector(this.selector)
  }
  this.ativar = function(){
    this.element().classList.add('ativar')
  }
}

// Dom.seletor = 'ul'
// Dom.ativar()

const li = new Dom('li')
const ul = new Dom('ul')

const lastli = new Dom('li:last-child')

const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar(){
    console.log(this.nome + ' andou')
  }
  
}

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade =  idade;
  this.andar = function(){
    console.log(this.nome + ' Andou')
  }
}

const Joao = new Pessoa('João', 20)
const Maria = new Pessoa('Maria', 25)
const Bruno = new Pessoa('Bruno', 15)
