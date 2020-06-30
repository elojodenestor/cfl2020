let readlineSync = require('readline-sync');
let num=1; positivos=-1; negativos=0; 

function validar(valor){
    if (valor > 0){
        positivos = positivos + 1;
        return false;
    } else if (valor < 0){
        negativos = negativos + 1;
        return false;
    } else {
        return true;
    }
}

while (validar(num) == false){
    num = readlineSync.questionInt("Escribe un numero [0 para finalizar]: ");
}

console.log("Ingresaste",positivos,"numeros positivos");
console.log("Que representan", (positivos*100)/(positivos+ negativos), "% del total de numeros ingresados");