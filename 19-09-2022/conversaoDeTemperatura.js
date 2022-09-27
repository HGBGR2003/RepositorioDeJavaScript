function convertaEmCelsius(f) {
    return (f-32)/1.8
}

function ConvertaEmFarenheit(c) {
   return (c*1.8)+38    
}

let celsius = convertaEmCelsius(45) 
let farenh = ConvertaEmFarenheit(7.222)

console.log(celsius)
console.log(farenh)