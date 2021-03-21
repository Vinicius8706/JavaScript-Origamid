const img = document.querySelector('img')

const imgTop = img.offsetTop

console.log(imgTop)

const imagens = document.querySelectorAll('img')

imagens.forEach((imagem)=>{
  console.log(imagem.offsetWidth)
})

console.log(imagens)

function somaImagens (soma){
  const imagens = document.querySelectorAll('img')
  imagens.forEach((imagem)=>{
  soma = soma + imagem.offsetWidth
  
  })
  console.log(soma)
}

window.onload= function(){
  somaImagens()
}

const links = document.querySelectorAll('a')

links.forEach((link)=>{
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if (linkWidth > 48 && linkHeight > 48){
  console.log(link, 'Possui acessibilidade')
 }else{
   console.log('Não possui boa acessibilidade')
 }
})

const browserSmall = window.matchMedia ('(max-width: 720px)').matches;
if(browserSmall){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}