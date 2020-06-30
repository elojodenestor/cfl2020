let readlineSync = require('readline-sync');
let posicion = 0; let letraArevisar; arrayTexto = []; arrayDeLetras = []; arrayContadorDeLetras = [];

let verLetrasEnTexto = (arrayTexto, letraArevisar) => {
    posicion = arrayTexto.indexOf(letraArevisar);
    arrayContadorDeLetras = [];
    while (posicion != -1) {
        arrayContadorDeLetras.push(posicion)
        posicion = arrayTexto.indexOf(letraArevisar,posicion+1)    
    }
    return 
};

let descomponerPalabra = (textoARevisar) => {
    arrayTexto = textoARevisar.split(''); 
    for (let i = 0; i < arrayTexto.length; i++) {
        letraArevisar = arrayTexto[i];
        verLetrasEnTexto(textoARevisar,letraArevisar);
        if (textoARevisar.indexOf(textoARevisar[i])==i){
            console.log("La letra",letraArevisar,"esta",arrayContadorDeLetras.length,"veces");
        }
    }
    return;
};

let texto = readlineSync.question("Introduzca el texto: ");
descomponerPalabra(texto);