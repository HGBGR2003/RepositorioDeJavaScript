function Forneca(a,b,c) {
    return a+b+c
}

function ChamandoAPrimeira(Forneca) {
    return Forneca / 3
}

let somando = Forneca(6,3,9)
let chamandoAVariavel = ChamandoAPrimeira(Forneca(6,3,9))
console.log(somando)
console.log(chamandoAVariavel)