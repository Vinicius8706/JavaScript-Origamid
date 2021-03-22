const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)

const faq = document.querySelector('.faq')

const firstChild = faq.querySelector('dt')
const primeiroDD = firstChild.nextElementSibling;
console.log(primeiroDD)

const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML
