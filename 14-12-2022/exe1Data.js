function getDaysInMonth(month) {
    if (typeof month !== 'number' || month < 0 || month > 11) {
        console.log("Informe um número de 0 á 11")
    }
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return daysInMonth[month]
}

console.log(getDaysInMonth(0))
console.log(getDaysInMonth(5))

