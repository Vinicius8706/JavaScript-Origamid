//window.alert('Isso mesmo')

const href = window.location.href

console.log(href)
 if(href === 'http://127.0.0.1:5500/index.html'){
   console.log('É igual')
}

const h1Selecionado = document.querySelector('h1') //Seleciona uma tag dentro do html

console.log(h1Selecionado)
document.body

// const h1Classes = h1selecionado.classList

function callbackh1(){
  console.log('Clicou em ', h1Selecionado.innerText )
}

h1Selecionado.addEventListener('click', callbackh1)

const hrefPagina = window.location.href;
console.log(hrefPagina)

const elementoAtivo = document.querySelector('.ativo')

const linguagem = window.navigator.language
console.log(linguagem)

const windowwidth = window.innerWidth;

console.log(windowwidth)