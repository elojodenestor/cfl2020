let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt("Ingrese el primer numero: ");
console.log("el primer número es", primerNumero);
let segundoNumero = readlineSync.questionInt("Ingrese el segundo numero: ");
console.log("el segundo numero es", segundoNumero);
let resultado = primerNumero + segundoNumero;
console.log("El resultado de la suma es:", resultado);