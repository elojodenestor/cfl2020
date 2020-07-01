let pedirTexto = require('readline-sync');
let inicio = 0; fin = 0; noEsPalindromo = false;

let verificarTexto = (textoArray) => {
    fin = textoArray.length-1;
    while ((inicio < fin) && (!noEsPalindromo)) {
        if (textoArray[inicio] == textoArray[fin]) {
            inicio++;
            fin--;
        } else {
            noEsPalindromo = true;
        }
    }
    return noEsPalindromo;
};

let texto = pedirTexto.question("Introduzca un Texto: ");
verificarTexto(texto.split(" ").join("").split(""));  //

if (noEsPalindromo) {
    console.log(texto,"NO es Palindromo");
} else {
    console.log(texto,"SI es Palindromo");
};