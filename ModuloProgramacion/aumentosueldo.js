let readlineSync = require('readline-sync');

console.log("///////////////////////////////////////////////////////////");
console.log("/////////////// PROGRAMA DE AJUSTE SALARIAL ///////////////");
console.log("///////////////////////////////////////////////////////////");
console.log(" ");

let sueldoActual = readlineSync.questionInt("Ingrese su sueldo actual: ");
let aumento = 0;
let porct = "nada";

if (sueldoActual <= 15000){
    aumento = sueldoActual * 0.20;
    porct = "20%";
} else if (sueldoActual > 15000 && sueldoActual <= 20000){
    aumento = sueldoActual * 0.10;
    porct = "10%";
} else if (sueldoActual > 20000 && sueldoActual <= 25000){
    aumento = sueldoActual * 0.05;
    porct = "5%";
} else if (sueldoActual > 25000){
    aumento = 0;
}

let sueldoAumentado = sueldoActual + aumento;
if (aumento == 0){
    console.log("No le corresponde aumento");
} else { 
    console.log("Le corresponde un aumento del", porct, "es decir", aumento, "$");
    console.log("Ahora ganara usted", sueldoAumentado, "$");
}