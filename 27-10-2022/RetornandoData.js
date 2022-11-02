function ReceberData(dia,mes,ano) {

    const agora = new Date()
    const dataControle = new Date(ano,mes-1,dia)

    let diferencaEmMilleSegundos = agora - dataControle
    // 1000 é 1 segundo tem 1000 millesegundos
    // Primeiro 60 é a quantidade de segundos em um minuto.
    // Segundo 60 é a quantidade de minutus em uma hora.
    // 24 é a quantidade de horas em um dia.

    let conversaoMilleSegudosEmDias = (1000 * 60 * 60 * 24)
    let diferencaEmDias = diferencaEmMilleSegundos / conversaoMilleSegudosEmDias

    let diffMeses = diferencaEmDias / 30
    let anos = diferencaEmDias / 365

    console.log("Diferença em Dias =", parseInt(diferencaEmDias.toFixed(2)))
    console.log("Diferença em Meses =", parseInt(diffMeses.toFixed(2)))
    console.log("Em anos = ", parseInt(anos.toFixed(2)))
}

ReceberData(1,3,2020)