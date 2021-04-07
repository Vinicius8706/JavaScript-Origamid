const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')


btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault()
  const cep = inputCep.value
  console.log(event)
  buscaCep(cep)
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(responde => responde.text())
    .then(body => {
      resultadoCep.innerText = body
    })
}

buscaCep(22740360)

// https://blockchain.infa/ticker
const btcDisplay = document.querySelector('.btc')
function fetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
      console.log(btcJson.BRL.buy)
      btcDisplay.innerText = ('R$' + btcJson.BRL.buy).replace('.', ',')
    })
}

setInterval(fetchBtc, 100)

fetchBtc()

const btnProxima = document.querySelector('.proxima')
const paragrafoPiada = document.querySelector('.piada')
function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
      paragrafoPiada.innerText = piada.value
    })
}

btnProxima.addEventListener('click', puxarPiada)

puxarPiada()