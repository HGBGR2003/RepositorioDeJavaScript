function fixStart(valor1) {
    let valorAlterado = valor1.charAt(0)
    return valorAlterado + valor1.slice(1).replace(new RegExp(valorAlterado,'g'),'*')
    //+ Converte Números
}

let mostrandoONovoValor = fixStart("babble")
console.log(mostrandoONovoValor)