let sexos = []
let alturas = []

function GereOValorDaAltura(){
    const maxi = 1.4
    const mini = 2.2
    let gere 
    gere = Math.floor(Math.random() * (maxi  - mini) + mini).toFixed(2)
    return gere
}

//Função para gerar o Sexo
function GerandoValoresDeSexo() {
    return Math.random() > 0.5 ? 'M' : 'F'
}

//Método Principal
let numeroDeControle = 10

for (let i = 0; i < numeroDeControle; i++) {
    //Usando os Vetores
    alturas[i] = GereOValorDaAltura()
    sexos[i] = GerandoValoresDeSexo()
}

let contadorMasculino = 0
let contadorFemenino = 0
let maiorAlturaDOIndividuo = 0
let sexoDaMaiorPessoa = ''

for (let i = 0; i < numeroDeControle; i++) {
    if (sexos[i] === 'M') contadorMasculino++
    else contadorFemenino++

    //Ver se é maior Altura.
    if (alturas[i] > maiorAlturaDOIndividuo){
        maiorAlturaDOIndividuo = alturas[i]
        sexoDaMaiorPessoa = sexos[i]
    }
}
