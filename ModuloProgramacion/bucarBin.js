let leerTeclado = require('readline-sync');
let arreglo = [];
let desorden = true;

let buscarNumBinario = (numABuscar, arreglo, ini, fin) => {
    let lugar;
    if (ini <= fin) {
        let medio = Math.floor((ini + fin) / 2);
        if (arreglo[medio] == numABuscar) {
            lugar = medio;
        } else if (arreglo[medio] > numABuscar) {
            lugar = buscarNumBinario(numABuscar, arreglo, ini, medio - 1);
        } else {
            lugar = buscarNumBinario(numABuscar, arreglo, medio + 1, fin);
        }
    } else {
        lugar = -1;
    }
    return lugar;
}

let ordenarArray = (arreglo) => {
    while (desorden) {
        desorden = false;
        for (let posArray = 0; posArray < arreglo.length; posArray++) {
            if (arreglo[posArray] > arreglo[posArray + 1]) {
                let temporal = arreglo[posArray];
                arreglo[posArray] = arreglo[posArray + 1];
                arreglo[posArray + 1] = temporal;
                desorden = true;
            }
        }
    }
    return arreglo;
}

let cantElementos = leerTeclado.questionInt("Cuantos elementos va a agregar? ");
for (let index = 0; index < cantElementos; index++) {
    arreglo[index] = Math.floor(Math.random() * 100);
}

console.log("Ingreso los siguientes elementos", arreglo);
ordenarArray(arreglo);
console.log("Y ordenados quedan así ->", arreglo);

let numABuscar = leerTeclado.questionInt("Ingrese el numero a buscar ");
console.log(numABuscar, "esta en la posicion", buscarNumBinario(numABuscar, arreglo, 0, arreglo.length - 1) + 1);