let readlineSync = require('readline-sync');
let numeroDados = 0; pos = 0; prob=6;
const seis = 6;

console.log("///////////////////////////////// PROGRAMA DE PROBABILIDADES DADISTICAS ////////////////////////////////////////");
console.log("//");

numeroDados = readlineSync.questionInt("Escribe la cantidad de Dados cuya probabilidad de sacarlos todos en 6 deseas ver: ");
//elevado = numeroDados ** seis;

if (numeroDados<1){
    console.log("El numero de Dados debe ser mayor a 1"); 
} else if (numeroDados==1) {
    prob = seis;
    console.log("Las probabilidades son de 1 en",prob);
} else {
    for (pos=1;pos<numeroDados;pos++){
        prob = prob * seis;
    }
    console.log("Las probabilidades son de 1 en",prob);
}

