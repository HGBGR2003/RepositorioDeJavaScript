function JogarDado() {
    const min = 1
    const max = 6
    //Por essa função ela arredonda valores para inteiros
    return Math.floor(Math.random() * (max - min) + min)
}

let fDado = [0,0,0,0,0,0]

const count = 10

for (let i = 0; i < count; i++){
    const n = JogarDado()
    console.log(n)
    if (n === 1){
        fDado[i]++
    }else if (n === 2) {
        fDado[i]++
    }else if (n === 3){
        fDado[i]++
    }else if (n === 4){
        fDado[i]++
    }else if (n === 5){
        fDado[i]++
    }else {
        fDado[i]++
    }

}

