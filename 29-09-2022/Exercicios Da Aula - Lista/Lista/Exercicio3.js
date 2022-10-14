function calculaImposto(taxa, custo){
    return custo * (1 + (taxa/100))
}

//Exercicio Devidamente Corrigido.
let calculo = calculaImposto(50,20)
console.log(calculo.toFixed(2))

//Código Velho.
/*let calculo = calculaImposto(50,20)
console.log(calculo)*/