let leerTeclado = require('readline-sync');
let arreglo = [];
let arrayAux = [];

let ordenarArray = (arreglo, arrayAux) => {
    let minimo;
    for (let pos = 0; pos < arreglo.length - 1; pos++) {
        minimo = arreglo[pos];
        for (let posComparada = pos + 1; posComparada < arreglo.length; posComparada++) {
            if (arreglo[posComparada] < minimo) {
                minimo = arreglo[posComparada];
                intercambiarElementos(pos, posComparada, arrayAux);
            }
        }
    }
    return arrayAux;
}

let intercambiarElementos = (posBuscada, posACambiar, arregloDestino) => {
    arregloDestino[posBuscada] = posACambiar
    arregloDestino[posACambiar] = posBuscada;
    //return arregloDestino;
}

let cantElementos = leerTeclado.questionInt("Cuantos elementos va a agregar? ");

for (let index = 0; index < cantElementos; index++) {
    arreglo[index] = Math.floor(Math.random() * 100);
    arrayAux[index] = index;
}

console.log("Ingreso los siguientes elementos", arreglo);
console.log("Y ordenados quedan así ->", ordenarArray(arreglo, arrayAux));