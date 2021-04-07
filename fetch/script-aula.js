const imagem = fetch('./imagem.html');

const div = document.createElement('div')

imagem.then(response => {
  console.log(response, status)
  if (response.status === 404) {
    console.log('Pagina nao existe')
  }
})

const array = ['Item 1', 'Item 2']

array.forEach(console.log)