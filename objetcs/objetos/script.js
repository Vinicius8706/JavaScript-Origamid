const transacoes = [ 
  { 
    descricao: 'Taxa do pão', 
    valor: 'R$ 39'}
  ,{ 
    descricao: 'Taxa do Mercado', 
    valor: 'R$ 129'},
  { 
    descricao: 'Recebimento do Cliente', valor: 'R$ 99'}, 
  { descricao: 'Taxa do Banco', 
  valor: 'R$ 129'}, 
  {
     descricao: 'Recebimento do Cliente', valor: 'R$ 49'},

]

let taxaTotal = 0;
let recebimentoTotal = 0

transacoes.forEach((item)=>{
  const numeroLimpo  = +item.valor.replace('R$ ','')
  if(item.descricao.slice(0,4) === 'Taxa'){
    taxaTotal += numeroLimpo
  }else{
    recebimentoTotal += numeroLimpo
  }
})

console.log(taxaTotal)
console.log(recebimentoTotal)

const transportes = 'Carro; Avião; Trem;Ônibus; Bicicleta'
const arrayTransportes= transportes.split()

console.log(arrayTransportes)

const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                 </ul> `

const htmlArray = html.split('span')
const htmlA = htmlArray.join('a')

console.log(htmlA)

const transacoes2 = ['Taxa de Banco', '     TAXA DO PÃO', '   taxa do mercado', 'depósito bancário', 'TARIFA especial']


let taxaTotal1 = 0;

transacoes2.forEach((item)=>{
  item = item.trim()
  item = item.toLowerCase()
  
  if(item.slice(0,4) === 'taxa'){
    ++taxaTotal1

  }else{
    console.log('nada')
  }
  console.log(taxaTotal1)
})

                