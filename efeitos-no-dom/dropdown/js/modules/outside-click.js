
export default function outsideClick(element, events ,callback) {
  const html = document.documentElement
  const outside = 'data-outside'

  if(element.hasAttribute(outside)){
      events.forEach(userEvent =>{
      html.addEventListener('click',handleOutsideClick)

    })
    element.setAttribute(outside, '')

  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)){
      element.removeAttribute(outside)
      html.removeEventListener('click',handleOutsideClick)
      events.forEach(userEvent =>{
        html.removeEventListener('click',handleOutsideClick)
  
      })
      callback()
    }
  }
}


    