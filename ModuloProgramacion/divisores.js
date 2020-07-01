let readlineSync = require('readline-sync');
let cantidad = 0; multiplo = 0;

let esMultiplo = (numero, multiplo) => {
    if ((numero % multiplo) == 0 ){
        return true;
    } else {
         return false;
    }
}

let cantidadDeDivisores = (numero) => {
    for (let i = 1; i<=numero; i++ ){
        if (esMultiplo(numero,i) == true){
            cantidad = cantidad + 1;
        } 
    } 
    console.log("Para el",numero,"hay",cantidad,"de divisores");
}

let numero = readlineSync.questionInt("Escribe el numero que quieres dividir: ");
cantidadDeDivisores(numero);