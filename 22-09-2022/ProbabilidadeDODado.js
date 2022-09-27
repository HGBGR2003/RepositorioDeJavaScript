function JogarDado() {
    const min = 1
    const max = 6
    //Por essa função ela arredonda valores para inteiros
    return Math.floor(Math.random() * (max - min) + min)
}

let fDado = [0,0,0,0,0,0]

