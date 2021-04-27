const cpfs = document.querySelectorAll('.cpf li')

// const arrayCpfs = [...cpfs] //desestruturar

// console.log(arrayCpfs)

const elementsInnerText= ([...elements]) => {
  return elements.map(element => { return element.innerText
  })
}

const limparCpf = (cpf) =>  {
  return cpf.replace(/[\D]/g,'')

}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,'$1.$2.$3-$4')
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCpf).map(construirCPF)
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements)
  const cpfsFormatados = formatarCPFS(cpfs)

  cpfsElements.forEach((element,index)=>{
    element.innerText = cpfsFormatados[index]
  })
}

substituirCPFS(cpfs)
