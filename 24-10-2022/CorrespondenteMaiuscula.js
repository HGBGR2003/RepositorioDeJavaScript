let fraseDigitada
fraseDigitada = prompt("Informe uma Frase de até 3 palavras")
fraseDigitada = fraseDigitada.split(' ')
if ( fraseDigitada.length < 2){
    console.log("Aceito")
}else {
    console.log("Não aceito")
}

