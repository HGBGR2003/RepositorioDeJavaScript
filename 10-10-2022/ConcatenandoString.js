function mixUp(letra1 , letra2) {
    let concatenandoVariavel = letra1 + " " + letra2
    let final1 = letra1.slice(2)
    final1++
    let final2 = letra2.slice(2)
    final2++
    return concatenandoVariavel
}

//Tentando Não sei, se vai dar certo
let principalFuncao = mixUp('mix', 'pod')
console.log(principalFuncao)