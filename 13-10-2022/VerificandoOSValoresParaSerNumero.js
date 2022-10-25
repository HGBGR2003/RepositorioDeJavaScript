let vetorNumerico = []
const controledoNumero = 2

  for(let i = 0 ; i < controledoNumero; i++){
    let num =  prompt("Informe um Número?")
    num = Number(num)
    if (isNaN(num)){
      console.log("Código Inválido")
    }else{
      vetorNumerico.push(num) //<= O vetor irá colocar o valor da variável num dentro do vetor principal.
    }
  }

let resultado = vetorNumerico.sort(function (a, b){return a-b})
console.log(resultado)
console.log(resultado.reverse())

  




