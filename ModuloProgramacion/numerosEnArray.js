let readlineSync = require('readline-sync');
let arregloNum = []; numNegativo = 0; numPositivo = 0; numCero = 0;

let verTipoDeNumero = (valor) => {
    if (valor < 0 ){
        numNegativo = numNegativo + 1;
        return;
    } else if (valor > 0 ) {
        numPositivo = numPositivo + 1;
        return;
    } else {
        numCero = numCero + 1;
        return;
    }
}

let dimensionArray = readlineSync.questionInt("Escriba la cantidad de numeros que ingresara: ");

for (let indice = 0; indice < dimensionArray; indice++){
    arregloNum[indice] = readlineSync.questionInt("Escribe el numero: ");
    verTipoDeNumero(arregloNum[indice]);
};

console.log("En los numeros ingresados [",arregloNum.toString(),"] hay",numPositivo,"positivos, y",numNegativo,"negativos, y",numCero, "ceros");