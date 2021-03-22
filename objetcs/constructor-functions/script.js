function Carro(marca,preco){
  this.marca = marca
  this.preco = preco
}

const honda = new Carro('Honda', 3000) // cria um novo objeto vazio 
honda.teste= 'oi'

const fiat =  new Carro('Fiat', 4000)
fiat.marca = 'Fiat'