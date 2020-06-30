let readlineSync = require('readline-sync');
let arregloNumeros = [];
let sumaArray = 0;

let dimensionArray = readlineSync.questionInt("Escribe la cantidad de numeros que ingresara: ");

for (let indice = 0; indice < dimensionArray; indice++){
    arregloNumeros[indice] = readlineSync.questionInt("Escribe el numero: ");
    sumaArray = sumaArray + arregloNumeros[indice];
};

console.log("La suma de todos los numeros ingresados es",sumaArray);