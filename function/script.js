// Functions

function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(5))

function pi(){
  return 3.14;
}

var total = 5* pi();

console.log(total)

function imc(peso, altura){
  var imc =  peso /(altura * altura);
  return imc;
}

console.log(imc(80, 1.8))

function corFavorita(cor){
  if(cor === 'azul'){
    return 'O céu é lindo'
  }else if(cor === 'verde'){
  return 'A floresta é maravilhosa'
  }else{
  return 'Eu nao gosto de cores'
  }
}

addEventListener ('click', function(){
  console.log('Clicou')
})

function imc2(peso, altura){
  var imc =  peso /(altura **2);
  console.log(imc)
}

imc2(80, 1.8)

function terceiraIdade(idade){
  if(typeof idade != 'number'){
    return 'Informe a sua idade!'
  }else if(idade >= 60){
    return true
  }else{
    return false
  }
}

console.log(terceiraIdade(60))