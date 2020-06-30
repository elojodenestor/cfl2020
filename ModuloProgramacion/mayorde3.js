let readlineSync = require('readline-sync');

let num1 = readlineSync.questionInt("Escribe un numero: ");
let num2 = readlineSync.questionInt("Escribe otro numero: ");
let num3 = readlineSync.questionInt("Escribe otro numero: ");
if (num1 > num2 && num1 > num3) {
    console.log("El mayor es el primer numero, el ", num1);
} else if (num2 > num3) {
    console.log("El mayor es el segundo numero, el ", num2);
} else {
    console.log("El mayor es el tercer numero, el ", num3);
}