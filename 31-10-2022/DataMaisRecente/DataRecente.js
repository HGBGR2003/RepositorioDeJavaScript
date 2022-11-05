let diaUsuario = prompt("Informe o dia?")
let mesUsuario = prompt("Informe um determinado mês ?")
let anoUsuario = prompt("Informe um ano ?")


function MaiorData() {
    if(anoUsuario >= "2022" && diaUsuario <= 5){
        console.log(diaUsuario + "/" + mesUsuario + "/" + anoUsuario)
        console.log("Data mais Recente!")
    }else if (anoUsuario < "2022"){
        console.log(diaUsuario + "/" + mesUsuario + "/" + anoUsuario)
        console.log("Data Anterior!")
    }
}

MaiorData()