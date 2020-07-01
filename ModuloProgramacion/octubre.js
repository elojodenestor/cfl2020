let readlineSync = require('readline-sync');

console.log("//////////////////////////////////////////////////");
console.log("////////////// PROGRAMA DE COMPRAS ///////////////");
console.log("//////////////////////////////////////////////////");
console.log(" ");
const porct = 0.15

console.log("Ingrese los datos de su compra: ")
let cantidad = readlineSync.questionInt("Cantidad comprada: ");
let precioU = readlineSync.questionInt("Precio Unitario: ");
let octubre = readlineSync.question("Compro ud. en Octubre? [s/n]: ");
// let condicion = octubre.toUpperCase();
let montoCompra = cantidad * precioU;

if (octubre.toUpperCase() == "S") {
    let descuento = montoCompra * porct;
    let montoFinal = montoCompra - descuento;
    console.log("////////////////////////////////////////////////////");
    console.log("////////////// D E S C U E N T A Z O ///////////////");
    console.log("////////////////////////////////////////////////////");
    console.log("Por haber comprado en nuestro mes Aniversario");
    console.log("Le corresponde un descuento de", descuento, "$");
    console.log("Pagando finalmente solo", montoFinal, "$");
} else {
    console.log("No le corresponde descuento, lo esperamos pronto");
}