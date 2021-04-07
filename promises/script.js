// const promesa = new Promise(function (resolve, reject) {
//   let condicao = false;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: 'Vinicius', idade: 20 })
//     })

//   // } else {

//     reject(Error('Reject'))
//   }
// })

// const retorno = promesa
//   .then(resolucao => {
//     console.log(resolucao);
//     resolucao.profissao = 'Designer'
//   })
//   .then(resolucao => {
//     return resolucao
//   }).catch(rejeitada => {
//     console.log(rejeitada)
//   }).finally(() => {
//     console.log('Acabou')
//   })

// console.log(retorno)

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado')
  }, 1500)
})


const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 1500)
})



const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})