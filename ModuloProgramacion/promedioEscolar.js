let readlineSync = require('readline-sync');
let nota1 = 0; nota2 = 0; nota3 = 0;
let arrayAlumno = []; arrayPromedio = [];
let seguir=true; nombreABuscar="";

let buscarAlumno = (nombreABuscar, dimensionArray) => {
    for (let indice = 0; indice < dimensionArray; indice++) {
        if (nombreABuscar == arrayAlumno[indice]) { 
            console.log("///////////////////////////////// Promedios");
            return console.log("Para el alumno", arrayAlumno[indice], "su promedio es de", arrayPromedio[indice]);
        } else {
            if (indice == dimensionArray-1) {
                return console.log("El alumno",nombreABuscar,"no existe");
            }
        }
    }
};

console.log("////////////////// PROGRAMA DE NOTAS ////////////////////");
console.log("//");
console.log("///////////////////////////////// Ingreso de Notas");

while (seguir){
    nombre = readlineSync.question("Escribe el nombre del alumno(a): ");
    nota1 = readlineSync.questionInt("Escribe la nota del 1er trimestre: ");
    nota2 = readlineSync.questionInt("Escribe la nota del 2do trimestre: ");
    nota3 = readlineSync.questionInt("Escribe la nota del 3er trimestre: ");
    arrayAlumno[contadorAlumnos] = nombre;
    arrayPromedio[contadorAlumnos] = (nota1 + nota2 + nota3) / 3;
    let continuar = readlineSync.question("¿Desea ingresar otro alumno? [s/n]: ");
    if (continuar == "s" || continuar == "S") {
        seguir = true;
    } else {
        seguir = false;
    }
};

dimensionArray = arrayAlumno.length();
seguir = true;
console.log("///////////////////////////////// Buscar:");

while (seguir){
    nombreABuscar = readlineSync.question("Escribe el nombre del alumno a buscar: ");
    buscarAlumno(nombreABuscar,dimensionArray);
    let continuar = readlineSync.question("¿Desea buscar otro alumno? [s/n]: ");
    if (continuar == "s" || continuar == "S") {
        seguir = true;
    } else {
        console.log("Hasta la próxima")
        seguir = false;
    }
};