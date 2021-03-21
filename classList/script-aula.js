const menu = document.querySelector('.menu')

menu.classList.add('ativo','teste')
menu.classList.remove('azul')

// console.log(menu.classList)

if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul')
}else{
  menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho'

const animais = document.querySelector('.animais')

console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')
console.log(img.getAttribute('alt'))

img.setAttribute('alt','É uma raposa')

const carro = {
  portas:4,
  andar: function(km){
    console.log(`Andou ${km}`)
  }
}

