let readlineSync = require('readline-sync');
let numero=0;
let seguir = true;

while (seguir) {
    numero = readlineSync.questionInt("Escribe un numero: ");

    if (numero > 0)  {
        if (numero % 2 == 0)  {
            console.log(numero, " Es par");
        } else {
            console.log(numero, " Es impar");
        }
        seguir = false;
    } else {
        console.log("Debes ingresar un numero mayor a cero")
        seguir = true;
    }
}