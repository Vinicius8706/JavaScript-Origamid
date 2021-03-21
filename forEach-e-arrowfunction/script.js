// const imgs = document.querySelectorAll('img')

// let i =0

// imgs.forEach(function(item){
//   console.log(item)
// })

//forEach e array

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

// console.log(titulosArray)

// const imgs = document.querySelectorAll('img')

// imgs.forEach((index, item)=>{
//   console.log(item, index)
// })

const paragrafo = document.querySelectorAll('p')

console.log(paragrafo)

paragrafo.forEach((item)=>{
  console.log(item);
})

paragrafo.forEach((item)=>{
  console.log(item.innerText)
})

const imgs = document.querySelectorAll('img')

imgs.forEach((item,index)=>{
  console.log(item,index)
})

let i = 0;
imgs.forEach(()=>{
  console.log(i++)
})

imgs.forEach(()=> i++)