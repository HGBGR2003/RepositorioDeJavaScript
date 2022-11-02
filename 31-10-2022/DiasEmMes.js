let quantidadeDias = Number(prompt("Informe o mês?"))

function validarDados(){
     if (quantidadeDias >= 0 && quantidadeDias < 11){
         console.log("Foi")
     }else {
         console.log("Não Foi")
     }

 }

validarDados()