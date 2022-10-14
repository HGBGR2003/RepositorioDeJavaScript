function fixStart(valor1) {
    let valorAlterado = valor1
    valorAlterado.slice(0,2)
    valorAlterado.slice(4)
    let juntandoOsDois = valorAlterado.slice(0,2) + "**" + valorAlterado.slice(4)
    console.log(juntandoOsDois)
     
}

let mostre = fixStart("babble")