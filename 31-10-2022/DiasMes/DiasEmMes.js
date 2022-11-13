function MostrarData(ano) {
   let mesDigitado = Number(prompt("Informe o mês")) -1
    let dias = [30,31]
    if (mesDigitado === 1){
        return ( (ano % 4 === 0) && ( (ano % 100 !== 0 ) || (ano % 400 === 0) ) ) ? 29 : 28
    } else {
        return dias[(mesDigitado + (mesDigitado < 7 ? 1:0)) % 2]
    }
}

console.log(MostrarData(2022))
