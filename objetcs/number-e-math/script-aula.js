console.log(Number.isInteger('ds'))

console.log(parseFloat('34343434')) //corta a virgula

console.log(parseInt('100.27 reais'))

let preco = 49.23
// console.log(preco.toFixed() + 3232)

preco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(preco)

Math.ceil(4.8334)

console.log(aleatorio)

const aleatorio = Math.floor(Math.random() * (72 - 32 + 1)) + 32