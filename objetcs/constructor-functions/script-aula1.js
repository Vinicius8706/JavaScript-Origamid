function Carro(marca,preco){
  this.marca = marca
  this.preco = preco
}

const honda = new Carro('Honda', 3000) // cria um novo objeto vazio 
honda.teste= 'oi'

const fiat =  new Carro('Fiat', 4000)
fiat.marca = 'Fiat'

function Carro2(marca,precoInicial){
  const taxa = 1.2
  const precoFinal = precoInicial * taxa;
  console.log(this)
  this.marca = marca
  this.preco = precoFinal
}

const mazda = new Carro2('Mazda', 5000)
