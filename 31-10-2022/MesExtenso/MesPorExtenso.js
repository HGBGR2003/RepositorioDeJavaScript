function ReceberMes(){
    let dia = (prompt("Informe um dia ?"))
    let mesUsuario = prompt("Informe o nome do mês ?")
    let ano = (prompt("Informe um ano ?"))

    switch (mesUsuario){
        case "janeiro":
            let digitMes =  0
            let formatarDa = (dia + "/" + digitMes + "/" + ano)
            console.log(formatarDa)
            break
        case "fevereiro":
            let digitMes2 = 1
            let dataAtual2 = new Date(ano,digitMes2,dia)
            console.log(dataAtual2)
            break
        case "março":
            let digitMes3 = 2
            let dataAtual3 = new Date(ano,digitMes3,dia)
            console.log(dataAtual3)
            break
        case "abril":
            let digitMes4 = 3
            let dataAtual4 = new Date(ano,digitMes4,dia)
            console.log(dataAtual4)
            break
        case "maio":
            let digitMes5 = 4
            let dataAtual5 = new Date(ano,digitMes5,dia)
            console.log(dataAtual5)
            break

        case "junho":
            let digitMes6 = 5
            let dataAtual6 = new Date(ano,digitMes6,dia)
            console.log(dataAtual6)
            break

        case "julho":
            let digitMes7 = 6
            let dataAtual7 = new Date(ano,digitMes7,dia)
            console.log(dataAtual7)
            break

        case "agosto":
            let digitMes8 = 7
            let dataAtual8 = new Date(ano,digitMes8,dia)
            console.log(dataAtual8)
            break
        case "setembro":
            let digitMes9 = 8
            let dataAtual9 = new Date(ano,digitMes9,dia)
            console.log(dataAtual9)
            break
        case "outubro":
            let digitMes10 = 9
            let dataAtual10 = new Date(ano,digitMes10,dia)
            console.log(dataAtual10)
            break
        case "novembro":
            let digitMes11 = 10
            let dataAtual11 = new Date(ano,digitMes11,dia)
            console.log(dataAtual11)
            break
        case "dezembro":
            let digitMes12 = 11
            let dataAtual12 = new Date(ano,digitMes12,dia)
            console.log(dataAtual12)
            break

    }




}

ReceberMes()