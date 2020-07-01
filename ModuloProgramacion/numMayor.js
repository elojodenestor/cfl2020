let readlineSync = require('readline-sync');
let num=0; numMayor=0; 
let bandera = true;

function validar(valor){
    if (valor > 0 && valor > numMayor){
        numMayor = valor;
        return false;
    } else {
        if (valor == 0 && bandera == false){
            console.log("El mayor, de los # introducidos, es",numMayor);
            //bandera = true;
            return true;
        } else {
            bandera = false;
            return false;
        }
    }
}

while (validar(num) == false){
    num = readlineSync.questionInt("Escribe un numero [0 para finalizar]: ");
}