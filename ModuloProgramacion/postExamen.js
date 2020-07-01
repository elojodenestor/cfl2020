let readlineSync = require('readline-sync');
let letraArevisar; arrayTexto = []; arrayDeVocales = []; arrayDeConsonantes = [];
let vocales = ["A","E","I","O","U"];
let consonantes = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];

let verLetrasEnTexto = (arrayTexto, letraArevisar) => {
    let esVocal = false;
    for (let i = 0; i < vocales.length; i++) {
        if (letraArevisar == vocales[i]) {
            arrayDeVocales.push(letraArevisar);
            esVocal = true;
            return;
        }
    }
    
    if (esVocal == false) {
        for (let i = 0; i < consonantes.length; i++) {
            if (letraArevisar == consonantes[i]) {
                arrayDeConsonantes.push(letraArevisar);
                esVocal = false;
                return;
            }
        }
    }
};

let descomponerPalabra = (textoARevisar) => {
    arrayTexto = textoARevisar.split(''); 
    for (let i = 0; i < arrayTexto.length; i++) {
        letraArevisar = arrayTexto[i];
        verLetrasEnTexto(textoARevisar,letraArevisar.toUpperCase());
    }
};

let texto = readlineSync.question("Introduzca el texto: ");
descomponerPalabra(texto.toLocaleLowerCase());
console.log("El texto descompuesto es ",arrayTexto);
console.log("Tiene estas vocales:",arrayDeVocales);
console.log("Y estas consonantes:",arrayDeConsonantes);