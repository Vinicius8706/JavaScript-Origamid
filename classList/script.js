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