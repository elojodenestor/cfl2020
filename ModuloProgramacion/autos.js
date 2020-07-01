let readlineSync = require('readline-sync');
console.log("CERRERA A CUATRO VUELTAS");
let vuelta1 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 1: ");
let vuelta2 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 2: ");
let vuelta3 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 3: ");
let vuelta4 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 4: ");
let tiempoTotal=vuelta1+vuelta2+vuelta3+vuelta4;
console.log("Tiempo total; ", tiempoTotal);
console.log("Promedio de vuelta: ", tiempoTotal/4);