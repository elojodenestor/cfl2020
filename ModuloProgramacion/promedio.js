let readlineSync = require('readline-sync');
let num = 0; nuMayor = 0; nuMenor = 0; total = 0; sumar = 0;
let bandera = true;

function validar(valor){
    if (bandera == true && valor == 0){
        nuMenor = valor;
        nuMayor = valor;
        bandera = false;
        return false;
    } else {    
        if (valor > nuMayor){
            nuMayor = valor;
            total = total + 1;
            return false;
        } else if (valor < nuMenor){
            nuMenor = valor;
            total = total + 1;
            return false;
        } else if (valor == 0){
            return true;
        } else {
            total = total + 1;
            return false;
        }
    }
}

while (validar(num) == false){
    num = readlineSync.questionInt("Escribe un numero [0 para finalizar]: ");
    sumar = sumar + num;
}

console.log("El mayor de los numeros ingresados fue el",nuMayor);
console.log("El menor de los numeros ingresados fue el",nuMenor);
console.log("El promedio, de los numeros ingresados fue",sumar/total);