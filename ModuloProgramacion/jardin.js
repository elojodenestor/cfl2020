let readlineSync = require('readline-sync');
let salitas = new Array(3); capacidadSalitas = new Array(3); seguir = true;

// ********************************************************************
// *************************** Funciones ******************************
// ********************************************************************

let introducirSalitas = () => {
    let posicion = 0; 
    while (posicion < 3){
        let nombreSalita = readlineSync.question("Escribe el nombre de la salita: ");
        salitas[posicion] = nombreSalita.toUpperCase();
        capacidadSalitas[posicion] = readlineSync.questionInt("Escribe su capacidad: ");
        posicion++;
    }
};

let buscarSalita = (salitaABuscar) => {
    for (let posicion=0; posicion < 3; posicion++) {
        if (salitas[posicion]==salitaABuscar){
            console.log("Le corresponde la salita ", salitas[posicion]);
            console.log("A la cual le quedan ", capacidadSalitas[posicion] - capacidad,"puestos");
            return seguir = false;
        }
    }
};

let asignarSalita = (capacidad) => {
    while (seguir){
        if (capacidad <= 30) {
            buscarSalita("AMARILLA");
        } else if (capacidad>30 && capacidad<=35){
            buscarSalita("VERDE");
        } else if (capacidad>35 && capacidad<=40){
            buscarSalita("AZUL");
        } else {
            console.log("No hay una salita con esa capacidad");
            seguir = false;
        }
    }
};

console.log("///////////////////////////////// Ingreso de Salas:");
introducirSalitas();
console.log("///////////////////////////////// Asignacion de Salas:");
let capacidad = readlineSync.questionInt("Escribe la cantidad de alumnos: ");
asignarSalita(capacidad);
console.log("///////////////////////////////// Gracias por su tiempo");