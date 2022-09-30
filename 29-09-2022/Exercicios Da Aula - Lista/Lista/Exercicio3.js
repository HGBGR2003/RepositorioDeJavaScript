function calculaImposto(taxa, custo) {
    let taxa1
    taxa1 = taxa/100
    return taxa1 + custo
}
//Fiz, só não sei, se é o que o exercicio pediu de verdade.
let calculo = calculaImposto(50,20)
console.log(calculo)