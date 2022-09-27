const x1 = 10
const x2 = 20
const x3 = 30

function ValorMaior(a,b,c) {
    if (a >= b && a >= c ) {
        return a
    } else if(b >= a && b >= c ) {
        return b
    }else{
        return c
    }  
}

function ValorMenor(a,b,c) {
    if (a <= b && a <= c ) {
        return a
    } else if(b <= a && b <= c ) {
        return b
    }else{
        return c
    }  
}

const MaiorNumero = ValorMaior(x1,x2,x3)
console.log(MaiorNumero)
console.log("------------------")
const MenorNumero = ValorMenor(x1,x2,x3)
console.log(MenorNumero)
