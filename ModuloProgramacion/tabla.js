let readlineSync = require('readline-sync');
let numTabla=0; numFin=0; num=0; posicion=0;
let bandera = true;

function validar(valor){              //funcion para validar que el # sea mayor a cero
    if (valor > 0 ){
        return true;
    } else {
        if (bandera == false){           //verifica que no sea la 1ra vez que el usuario introduce el # 
            console.log("Por favor ingresa un numero mayor a cero");
        }
        return false;
    }
}


while (validar(numTabla) == false){
    numTabla = readlineSync.questionInt("Escribe el numero de la Tabla que deseas ver: ");
    bandera = false;     //Permite mostrar el mensaje de num > 0 a partir de la 2da vez
}

bandera = true;         //Para no mostrar el mensaje de num > 0 la 1ra vez

while (validar(numFin) == false){
    numFin = readlineSync.questionInt("Escribe ahora hasta que numero deseas verla: ");
    bandera = false;
}


console.log(" ** ");
console.log("Tabla del",numTabla, "( hasta el", numFin, ")");
console.log(" ** ");
for (posicion = 1; posicion <= numFin; posicion++){
    console.log(numTabla, "x",posicion, "=",numTabla*posicion);
}