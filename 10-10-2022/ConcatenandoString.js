function mixUp(letra1 , letra2) {
    let concatena
    let controleDoCorte1 = letra2.slice(0,2) + letra1.slice(2)
    let controleDoCorte2 = letra1.slice(0,2) + letra2.slice(2)
    concatena = controleDoCorte1 + " " + controleDoCorte2
    return concatena
}
console.log(mixUp('mix', 'pod'))
console.log(mixUp('dog', 'dinner'))
