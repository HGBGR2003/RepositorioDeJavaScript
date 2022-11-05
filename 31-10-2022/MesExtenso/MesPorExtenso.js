function ReceberMes(){
    let dia = Number((prompt("Informe um dia ?")))
    let mesUsuario = prompt("Informe o nome do mês ?")
    let ano = Number((prompt("Informe um ano ?")))

    //Usado o padrão de 0 á 11.
    switch (mesUsuario){
        case "janeiro":
            let digitMes =  0
            let formatarData = (dia + "/" + digitMes + "/" + ano)
            console.log(formatarData)
            break

        case "fevereiro":
            let digitMes2 = 1
            let formatarData2 = (dia + "/" + digitMes2 + "/" + ano)
            console.log(formatarData2)
            break

        case "março":
            let digitMes3 = 2
            let formatarData3 = (dia + "/" + digitMes3 + "/" + ano)
            console.log(formatarData3)
            break

        case "abril":
            let digitMes4 = 3
            let formatarData4 = (dia + "/" + digitMes4 + "/" + ano)
            console.log(formatarData4)
            break

        case "maio":
            let digitMes5 = 4
            let formatarData5 = (dia + "/" + digitMes5 + "/" + ano)
            console.log(formatarData5)
            break

        case "junho":
            let digitMes6 = 5
            let formatarData6 = (dia + "/" + digitMes6 + "/" + ano)
            console.log(formatarData6)
            break

        case "julho":
            let digitMes7 = 6
            let formatarData7 = (dia + "/" + digitMes7 + "/" + ano)
            console.log(formatarData7)
            break

        case "agosto":
            let digitMes8 = 7
            let formatarData8 = (dia + "/" + digitMes8 + "/" + ano)
            console.log(formatarData8)
            break

        case "setembro":
            let digitMes9 = 8
            let formatarData9 = (dia + "/" + digitMes9 + "/" + ano)
            console.log(formatarData9)
            break

        case "outubro":
            let digitMes10 = 9
            let formatarData10 = (dia + "/" + digitMes10 + "/" + ano)
            console.log(formatarData10)
            break

        case "novembro":
            let digitMes11 = 10
            let formatarData11 = (dia + "/" + digitMes11 + "/" + ano)
            console.log(formatarData11)
            break

        case "dezembro":
            let digitMes12 = 11
            let formatarData12 = (dia + "/" + digitMes12 + "/" + ano)
            console.log(formatarData12)
            break
    }
}

ReceberMes()