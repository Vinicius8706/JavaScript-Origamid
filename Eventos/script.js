const img = document.querySelector('img')

function callback(event){
  console.log(event)
}

// img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event){
  console.log(event.currentTarget)
  // console.log(event.eventTarget) // onde o clique ocorreu
  console.log(event.target) // string do click

}

animaisLista.addEventListener('click', callbackLista)

// console.log(animaisLista)

const linkExterno = document.querySelector('a[href^="http"')

function handleLinkExterno(event){
  event.preventDefault()
  console.log(this.getAttribute(''))
  console.log(event.currentTarget)

}

linkExterno.addEventListener('click',handleLinkExterno)

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)

// window.addEventListener('resize', handleEvent)

function handleKeyboard(event){
  if(event.key === 'a'){
    document.body.classList.toggle('azul')
  } else if(event.key === 'v'){
    document.body.classList.toggle('vermelho')
  }

window.addEventListener('keydown', callback)
}

