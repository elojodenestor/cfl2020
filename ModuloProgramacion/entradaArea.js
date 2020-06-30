let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("Ingrese la base del rectangulo: ");
let altura = readlineSync.questionInt("Ingrese la altura del rectangulo: ");
let area = base * altura / 2;
console.log("El area del rectangulo es: ", area);