let readlineSync = require('readline-sync');
let base = 0; potencia = 0; exponente = 0; 

let calcularPotencia = (base,exponente) => {
    let pos;
    potencia = base;
    for (pos=1;pos<exponente;pos++){
        potencia = potencia * base;
        console.log("potencia en la vuelta",pos, "es",potencia);
    }
    return potencia;
}

base = readlineSync.questionInt("Escribe la base: ");
exponente = readlineSync.questionInt("Escribe el exponente: ");
if (exponente<0){
    console.log("El exponente debe ser mayor o igual a 0"); 
} else if (exponente==0) {
    console.log("La potencia de",base, "elevado a",exponente,"es 1");
} else {
    calcularPotencia(base,exponente);
    console.log("La potencia de",base, "elevado a",exponente,"es",potencia);
}