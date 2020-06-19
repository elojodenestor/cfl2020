let nombres = ["Antonella", "Bernardo", "Nestor", "Debora"];
let edad = [28, 20, 40, 31];
let altura = [180, 170, 188, 155];
let desorden = true;

let ordenarArray = (arreglo) => {
    while (desorden) {
        desorden = false;
        for (let pos = 0; pos < arreglo.length; pos++) {
            if (arreglo[pos] > arreglo[pos + 1]) {
                intercambiarElementos(edad, pos, pos + 1);
                intercambiarElementos(nombres, pos, pos + 1);
                intercambiarElementos(altura, pos, pos + 1);
                desorden = true;
            }
        }
    }
    return arreglo;
};

let intercambiarElementos = (array, posBuscada, posACambiar) => {
    let Temp = array[posBuscada];
    array[posBuscada] = array[posACambiar]
    array[posACambiar] = Temp;
}

console.log("Edades", edad);
console.log("Nombres", nombres);
console.log("Alturas", altura);
ordenarArray(edad);
console.log("****")
console.log("Edades", edad);
console.log("Nombres", nombres);
console.log("Alturas", altura);