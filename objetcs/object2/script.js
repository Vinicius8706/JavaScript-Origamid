function verificarDado(dado){
  return Object.prototype.toString.call(dado)
}

console.log(verificarDado({}))

const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {value: 4, enumerable: true}
})

const configuracao = {height:600, width: 800, background: '#333'}

Object.freeze(configuracao)

console.log(Object.getOwnPropertyNames(Array.prototype))