let readlineSync = require('readline-sync');
let arregloNum = [];

let dimensionArray = readlineSync.questionInt("Escriba la cantidad de numeros que ingresara: ");

for (let indice = 0; indice < dimensionArray; indice++){
    arregloNum[indice] = readlineSync.questionInt("Escribe el numero: ");
};

for (indice = dimensionArray - 1; indice >= 0; indice = indice-1){
    console.log("En la posicion",indice,"esta el",arregloNum[indice]);
};
