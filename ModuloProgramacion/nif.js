let pedirTexto = require('readline-sync');
let dni = 0; valorLetra = 0; dniValido = false; letraCorrespondiente = undefined;
let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

let validarDNI = (dni) => {
    if (dni > -1 || dni < 1000000) {
        dniValido = true;
    } else {
        console.log("DNI incorrecto, intente de nuevo")
        dniValido = false;
    }
    return dniValido;
}

let calcularLetra = (dni) => {
    valorLetra = dni % 23;
    buscarLetra(valorLetra);
    return (letraCorrespondiente,dni);
}

let buscarLetra = (valorLetra) => {
    for (let posicion = 0; posicion < letras.length; posicion++) {
        if (valorLetra == posicion) {
            letraCorrespondiente = letras[posicion];
            return letraCorrespondiente;
        }
    }
}

while (dniValido == false){
    dni = pedirTexto.questionInt("Introduzca el numero de DNI: ");
    validarDNI(dni);
}

calcularLetra(dni);
console.log("Su NIF es",letraCorrespondiente+"-"+dni+"-"+valorLetra);