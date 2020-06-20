let arreglo = [1,2,3,4,5,6,7];
let arregloInv = [];

let invertirArray = (arreglo, inicio, fin) => {   
    if (fin==-1) {
        return arregloInv;
    } else {
        arregloInv.push(arreglo[fin]);
        return invertirArray(arreglo,inicio+1,fin-1);
    }
};

console.log(arreglo);
console.log(invertirArray(arreglo,0,arreglo.length-1));