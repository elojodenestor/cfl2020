let readlineSync = require('readline-sync');

let EUREKA = false;
let intentos = 0;
let clave="";

console.log("//////////////////////////////////////////////////////////////////");
console.log("/////////////// PROGRAMA DE VERIFICACION DE CLAVE ///////////////");
console.log("//////////////////////////////////////////////////////////////////");
console.log(" ");

while (intentos < 3 && clave.toUpperCase() != "EUREKA") {
    clave = readlineSync.question("Ingrese la clave: ");
    if (clave.toUpperCase() == "EUREKA") {
        console.log("¡     E U R E K A     !");
        //break;
    } else {
        console.log("¡Clave invalida!");
    }
    intentos = intentos + 1;
}
if (clave.toUpperCase() != "EUREKA") {
    console.log("Superaste el numero de intentos, ¡Adios!");
}
