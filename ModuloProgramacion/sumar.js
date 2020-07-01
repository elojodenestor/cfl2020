let readlineSync = require('readline-sync');
let num1=0; num2=0; suma=0; incremento=0;
let seguir = true;

while (seguir){
    num1 = readlineSync.questionInt("Escribe un numero: ");
    num2 = readlineSync.questionInt("Escribe otro numero: ");
    // suma = num1 + num2;

    if (num1 > num2) {
        for (incremento = num2; incremento <= num1; incremento++){
            suma = suma + incremento;
        }
        seguir = false;
    } else if (num2 > num1) {
        for (incremento = num1; incremento <= num2; incremento++){
            suma = suma + incremento;
        }
        seguir = false;
    } else {    
        console.log("Vuelve a intentarlo, ambos numeros son iguales");
        console.log(" *** ");
        seguir = true;
    }
}

console.log("La suma entre ambos numero es", suma);