import * as fs from 'fs';
import * as readlineSync from "./node_modules/readline-sync";

let todoAsignado : string[] = [];
let arrayOrdenado : string[] = [];
let array : string[] = [];

let archivoVotantes : string = fs.readFileSync("votantes.txt","utf-8");
let archivoCentros : string = fs.readFileSync("centrosVotacion.txt","utf-8");
let arrayVotantes : string[] = cargarDataenArray(array, archivoVotantes, "Estos son los votantes:");
let arrayCentros : string[] = cargarDataenArray(array, archivoCentros, "Estos son los Centros de Votacion:");

iniciarAsignacion();

function iniciarAsignacion() {
    let opcionInvalida : boolean = true;
    while (opcionInvalida){
        let iniciar : string = readlineSync.question("Desea iniciar asignacion de votantes? [s/n]: ");
        if (iniciar.toUpperCase() == "S") {
            comenzarProceso();
            opcionInvalida = false;
        } else if (iniciar.toUpperCase() == "N") {
            console.log("De acuerdo, adios...");
            opcionInvalida = false;
        } else {
            console.log("**** ERROR--> Debes responder con [S] para sí o [N] para no");
            opcionInvalida = true;
        }
    }
    console.log("Gracias por usar el Sistema de Asignacion de Votantes");
}

function comenzarProceso() {
    ordenarVotantes(arrayVotantes);
    asignarVotantesACentros(arrayVotantes, arrayCentros, todoAsignado);
    return;
}

function cargarDataenArray(array : string[], origen : string, mensaje : string) : string[] {
    array  = origen.split(",");
    console.log(mensaje);
    console.log(array);
    return array;
}

function ordenarVotantes(arreglo : string[]) : string[] {
    let desorden : boolean = true;
    let menor : string;
    for (let position : number = 0; position < arreglo.length - 1; position++) {
        menor = arreglo[position];
        for (let posComparada : number = position + 1; posComparada < arreglo.length; posComparada++) {
            if (arreglo[posComparada] < menor) {
                menor = arreglo[posComparada];
                intercambiarElementos(arreglo, position, posComparada);
            }
        }
    }

    function intercambiarElementos(array : string[], posBuscada : number, posACambiar : number) {
        let Temp : string = arreglo[posBuscada];
        arreglo[posBuscada] = arreglo[posACambiar];
        arreglo[posACambiar] = Temp;
        return arreglo
    }
    
    return arrayOrdenado;
}

function asignarVotantesACentros(votantes : string[], centros : string[], arrayGen : string[]) {
    let faltanCentros : boolean = true;
    let esteVotante : number = 0;
    let contador : number = 0;
    let esteCentro : number = 0;
    while (faltanCentros) {
        if (esteCentro < centros.length){
            for (esteVotante; contador < votantes.length / centros.length; esteVotante++) {
                arrayGen[esteVotante] = `Votante: ${votantes[esteVotante]} Centro de Votacion: ${centros[esteCentro]}`;
                contador++;
            };
            esteCentro++;
            contador = 0;
        } else {
            faltanCentros = false;
        };
    }
    return mostrarAsignaciones(todoAsignado);
}

function mostrarAsignaciones(asignaciones : string[]){
    console.log(" ************************** ASIGNACION de VOTANTES *************************");
    for (let indice : number = 0; indice < asignaciones.length; indice++) {
        console.log(asignaciones[indice]);
    };
    console.log(" **** ");
}