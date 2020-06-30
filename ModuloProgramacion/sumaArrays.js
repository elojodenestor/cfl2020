let readlineSync = require('readline-sync');
let arregloUno = []; arregloDos = []; 

for (let indice = 0; indice < 6; indice++) {
    arregloUno[indice] = readlineSync.questionInt("Escribe el numero [para lista A]: ");
    arregloDos[indice] = readlineSync.questionInt("Escribe el numero [para lista B]: ");
};

console.log("********************************* RESULTADOS ********************************");
for (indice = 0; indice < 6; indice++){
    console.log(arregloUno[indice], "+",arregloDos[indice], "=",arregloUno[indice] + arregloDos[indice]);
};
