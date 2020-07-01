let readlineSync = require('readline-sync');

let edad = readlineSync.questionInt("Ingrese la edad: ");
let añosLaborando = readlineSync.questionInt("Ingrese los años en la empresa: ");

if (edad >= 65 && añosLaborando >= 20) {
    console.log("Le corresponde jubilación");
} else {
    console.log("¡A seguir trabajando, que falta!");
}