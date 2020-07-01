let readlineSync = require('readline-sync');
let arregloUno = []; arregloDos = []; sumatoria = 0;

let cargarArray = (dimensionArray) => {
    for (let indice = 0; indice < dimensionArray; indice++) {
        arregloUno[indice] = readlineSync.questionInt("Escribe el numero [para lista A]: ");
        arregloDos[indice] = readlineSync.questionInt("Escribe el numero [para lista B]: ");
    };
};

let mostrarArray = (dimensionArray) => {
    for (indice = 0; indice < dimensionArray; indice++){
        console.log(arregloUno[indice], "x",arregloDos[indice], "=",arregloUno[indice] * arregloDos[indice]);
        sumatoria += (arregloUno[indice] * arregloDos[indice])
    };
    console.log("La sumatoria Total es ",sumatoria);
}

let dimensionArray = readlineSync.questionInt("Escriba la cantidad de numeros que ingresara: ");
cargarArray(dimensionArray);
mostrarArray(dimensionArray);