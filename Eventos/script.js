// Quando o usuário clicar nos links internos do site adicione a classe ativo ao item clicado e remova dos demais itens como eles possuam a mesma. Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleClick(event){
  event.preventDefault();
  linksInternos.forEach((link)=>[
    link.classList.remove('ativo')
  ]);
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link)=>{
  link.addEventListener('click', handleClick)
})

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event){
  event.currentTarget.remove();
  
}



// todosElementos.forEach((elemento)=>{
//   elemento.addEventListener('click', handleElemento)
// })

// console.log(todosElementos)

function handleClickT(event){
  console.log(event.key)
  if(event.key === 't'){ 
    console.log('Clicou t')
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClickT)