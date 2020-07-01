let v1 = [1,2,3]; v2 = [4,5,6]; v3 = [2,1,2]; v4 = [1,2,1]; arraysMultiplicados = [1,1,1];

let multiplicarArreglos = (arr1, arr2) => {
    for (let indice = 0; indice < 3; indice++) {
        arraysMultiplicados[indice] = arraysMultiplicados[indice] * arr1[indice] * arr2[indice];
    }
};

multiplicarArreglos(v1,v2);
multiplicarArreglos(v3,v4);
console.log("El resultado de la multiplicacion es [", arraysMultiplicados.toString(),"]");