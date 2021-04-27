// function createButton(text){
//   const numeroSecreto= 'jkosanaskodnasdko212'
// }


// function createButton(text){
//   function element(){
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = text
//     return buttonElement;
//   }
  
//   return Object.freeze ({
//     text,
//     element
//   })
  
// }

// const btnBlue = createButton('Comprar')

// const btnComprar = createButton('Comprar')
// const btnVender = createButton('Vender')

// btnComprar.text = 'Novo Texto'
 
// console.log(btnComprar, btnVender)

// function Pessoa(nome) {
//   if(!new.target)
//     return new Pessoa()
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`
// }

// const designer = new Pessoa('André')

// console.log(designer)

function $$(selectedElements) {
 const elements = document.querySelectorAll(selectedElements);

  function hide(){
    elements.forEach(element=>{
      element.style.display = 'none';
    })
    return $$(selectedElements)
  }
  
  function show(){
    elements.forEach(element=>{
      element.style.display = 'initial';
    })
    return this
  }

  function on(onEvent, callback ){
    elements.forEach(element=>{
      element.addEventListener(onEvent, callback)
    })
    return this

  }

  function addClasss(className){
    elements.forEach(element =>{
      element.classList.add(className)
    })
    return this

  }

  function removeClass(className){
    elements.forEach(element =>{
      element.classList.remove(className)
    })
    return this

  }

  return{
    elements,
    hide,
    show,
    on,
    addClasss,
    removeClass,
  }
}

const btns = $$('button')

console.log(btns.hide().show())

btns.on('click', handleClick)

function handleClick(event){
  console.log(event.target)
  btns.addClasss('active')

}