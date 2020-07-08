"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("./node_modules/readline-sync");
var todoAsignado = [];
var arrayOrdenado = [];
var array = [];
var archivoVotantes = fs.readFileSync("votantes.txt", "utf-8");
var archivoCentros = fs.readFileSync("centrosVotacion.txt", "utf-8");
var arrayVotantes = cargarDataenArray(array, archivoVotantes, "Estos son los votantes:");
var arrayCentros = cargarDataenArray(array, archivoCentros, "Estos son los Centros de Votacion:");
iniciarAsignacion();
function iniciarAsignacion() {
    var opcionInvalida = true;
    while (opcionInvalida) {
        var iniciar = readlineSync.question("Desea iniciar asignacion de votantes? [s/n]: ");
        if (iniciar.toUpperCase() == "S") {
            comenzarProceso();
            opcionInvalida = false;
        }
        else if (iniciar.toUpperCase() == "N") {
            console.log("De acuerdo, adios...");
            opcionInvalida = false;
        }
        else {
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
function cargarDataenArray(array, origen, mensaje) {
    array = origen.split(",");
    console.log(mensaje);
    console.log(array);
    return array;
}
function ordenarVotantes(arreglo) {
    var desorden = true;
    var menor;
    for (var position = 0; position < arreglo.length - 1; position++) {
        menor = arreglo[position];
        for (var posComparada = position + 1; posComparada < arreglo.length; posComparada++) {
            if (arreglo[posComparada] < menor) {
                menor = arreglo[posComparada];
                intercambiarElementos(arreglo, position, posComparada);
            }
        }
    }
    function intercambiarElementos(array, posBuscada, posACambiar) {
        var Temp = arreglo[posBuscada];
        arreglo[posBuscada] = arreglo[posACambiar];
        arreglo[posACambiar] = Temp;
        return arreglo;
    }
    return arrayOrdenado;
}
function asignarVotantesACentros(votantes, centros, arrayGen) {
    var faltanCentros = true;
    var esteVotante = 0;
    var contador = 0;
    var esteCentro = 0;
    while (faltanCentros) {
        if (esteCentro < centros.length) {
            for (esteVotante; contador < votantes.length / centros.length; esteVotante++) {
                arrayGen[esteVotante] = "Votante: " + votantes[esteVotante] + " Centro de Votacion: " + centros[esteCentro];
                contador++;
            }
            ;
            esteCentro++;
            contador = 0;
        }
        else {
            faltanCentros = false;
        }
        ;
    }
    return mostrarAsignaciones(todoAsignado);
}
function mostrarAsignaciones(asignaciones) {
    console.log(" ************************** ASIGNACION de VOTANTES *************************");
    for (var indice = 0; indice < asignaciones.length; indice++) {
        console.log(asignaciones[indice]);
    }
    ;
    console.log(" **** ");
}
