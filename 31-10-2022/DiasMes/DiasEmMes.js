let mesDigitado = prompt("Informe o mês")
function MostrarData(ano1) {
    let dias = [30,31]
   let ano = ano1
    let data = new Date(ano,mesDigitado-1,0)
    if (mesDigitado == 1){
        return ( (ano % 4 === 0) && ( (ano % 100 !== 0 ) || (ano % 400 === 0) ) ) ? 29 : 28
    } else {
        return dias [(mesDigitado + (mesDigitado < 7 ? 1:0)) % 2]
    }
}

console.log(MostrarData(2022))
