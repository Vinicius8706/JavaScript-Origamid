export default function initFuncionamento() {


}

const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date()

const diaAgora = dataAgora.getDay
console.log(diasSemana)