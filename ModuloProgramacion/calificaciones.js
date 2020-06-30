let readlineSync = require('readline-sync');
let nombre = "a";
let nota = 0; notaPractica = 0; notaProblems = 0; notaTeorica = 0; contador =1;

function nombreBlanco(nombre){
    if (nombre == ""){
        return true;
    } else {    
        return false;
    }
}

console.log("///////////////////////////////// PROGRAMA DE NOTAS ////////////////////////////////////////");
console.log("//");

while (nombreBlanco(nombre) == false){
    console.log("///////////////////////////////// Alumno:", contador);
    nombre = readlineSync.question("Escribe el nombre del alumno(a): ");
    if (nombreBlanco(nombre) == true){
        console.log("Programa finalizado");
        break;
    } else {
        notaPractica = readlineSync.questionInt("Escribe la nota de la parte práctica: ");
        notaProblems = readlineSync.questionInt("Escribe la nota de la parte de problemas: ");
        notaTeorica = readlineSync.questionInt("Escribe la nota de la parte teorica: ");
    }
    if ((notaPractica >=0 && notaPractica <=10) && (notaProblems >=0 && notaProblems <=10) && (notaTeorica >=0 && notaTeorica <=10)) {
        console.log("La nota final de",nombre,"es de",(notaPractica*0.1) + (notaProblems*0.5) + (notaTeorica*0.4));
    } else {
        console.log("****** Las notas deben estar entre 0 y 10");
    }
    contador = contador + 1;
}