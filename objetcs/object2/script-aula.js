
const carro = {
  rodas: 4,
  init(valor){
    this.marca= valor;
    return this
  },
  acelerar() {
    return this.marca + ' acelerou'
  },
  buzinar() {
    return this.marca + ' buzinou'
  }
}

const honda = Object.create(carro).init('Honda')

console.log(honda)
console.log(honda.acelerar())

const ferrari = Object.create(carro).init('Ferrari')

console.log(ferrari.acelerar())

const funcaoAutomovel = {
  acelerar(){
    return 'acelerou'
  },
  buzinar(){
    return 'buzinou'
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

Object.keys(moto)
Object.assign(moto, funcaoAutomovel);

console.log(moto);

Object.defineProperties(moto, {
  rodas:{
    get() {
      return this._rodas
    },
    set(value) {
      this._rodas = value * 4
    }
  }
})


console.log(moto)

Object.getOwnPropertyDescriptors(Array)
Object.getOwnPropertyNames(Array)
 
const frutas = ['Banana']

console.log(Object.getPrototypeOf(frutas))

const frutas1 = ['Banana', 'Pera']
const frutas2 = ['Banana', 'Pêra']
Object.is(frutas1,frutas2)

Object

Object.freeze(carro) //congela o objeto
Object.seal(carro) 
Object.preventExtensions(carro) //previne adiçao de novas propriedades

frutas1.hasOwnProperty('map')

Array.prototype.isPrototypeOf(frutas)

console.log(frutas1.toString()) 

console.log(Object.prototype.toString.call(somar))

