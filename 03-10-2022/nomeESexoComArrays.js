let sexos = []
let aluras = []

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
    aluras[i] = GereOValorDaAltura()
    sexos[i] = GerandoValoresDeSexo()

}
