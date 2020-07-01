let readlineSync = require('readline-sync');

let esMultiplo = (valor, multiplo) => {
    if ((valor % multiplo) == 0 ){
        return true;
    } else {
        return false;
    }
}

let numero = readlineSync.questionInt("Escribe el numero que quieres dividir: ");
let multiplo = readlineSync.questionInt("Escribe el numero por el que quieres dividir: ");

if (esMultiplo(numero,multiplo)==true){
    console.log(numero,"ES multiplo de", multiplo);
} else {
    console.log(numero,"NO es multiplo de", multiplo);
}