import validarCpf from './validarcpf.js'

const cpf = document.querySelector('#cpf')
const ValidarCpf= new validarCpf(cpf).iniciar()

console.log(ValidarCpf)
