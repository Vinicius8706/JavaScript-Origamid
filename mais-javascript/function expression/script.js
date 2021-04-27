const somar = (a,b) => a +b;

console.log(somar(4,5));

// IIFE - Imediately Invoked Function Expression

const instrumento = 'Violão';

(function(){
  const instrumento = 'Guitarra'

  console.log(instrumento)
})();

console.log(instrumento)
const princeNumber = n => +n.replace('R$', '').replace(',','.')
princeNumber('R$ 99,99');

(function(){
  const nome = "Vinicius"
  console.log(nome)
})();
const active = callback => callback()

active(function(){
  console.log('Teste de active')
})

