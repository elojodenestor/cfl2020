"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var arregloUno = [];
var array = [];
var indice;
var nombSeek;
var tope;
var seguir = true;
var encontrado;
tope = readlineSync.questionInt("Cuantos nombres vas a agregar?: ");
cargarNombres(tope);
function cargarNombres(tope) {
    console.log("***************** CARGANDO DATOS ********************");
    for (indice = 0; indice < tope; indice++) {
        arregloUno[indice] = readlineSync.question("Escribe el nombre: ");
    }
    console.log("DATOS CARGADOS");
    ordenarArray(arregloUno);
    opciones(seguir);
}
;
function opciones(seguir) {
    console.log("***************** SELECCIONE UNA OPCION ********************");
    console.log("*****************      [1]  BUSCAR      ********************");
    console.log("*****************      [2]  AGREGAR     ********************");
    console.log("*****************      [3]  ELIMINAR    ********************");
    console.log("*****************      [4]  SALIR       ********************");
    var opcion;
    var opValida = false;
    while (opValida == false) {
        opcion = readlineSync.questionInt("¿Que deseas hacer?: ");
        if (opcion === 1) {
            nombSeek = readlineSync.question("Nombre a buscar: ");
            if (buscar(nombSeek) == true) {
                console.log(nombSeek + " fue encontrado en el registro ;-P");
            }
            else {
                console.log(nombSeek + " NO fue encontrado en el registro x.X");
            }
        }
        else if (opcion === 2) {
            agregar();
        }
        else if (opcion === 3) {
            nombSeek = readlineSync.question("Nombre a buscar: ");
            if (buscar(nombSeek) == true) {
                eliminar(nombSeek);
            }
            else {
                console.log(nombSeek + " NO fue encontrado en el registro x.X");
            }
        }
        if (opcion == 4) {
            opValida = true;
        }
        else {
            opValida = false;
            console.log("Opcion invalida");
        }
    }
}
function ordenarArray(array) {
    var desorden = false;
    while (desorden) {
        console.log("Entré al while");
        desorden = false;
        for (var posArray = 0; posArray < array.length; posArray++) {
            console.log("Entré al for------ pos es", posArray);
            if (array[posArray] > array[posArray + 1]) {
                var temporal = array[posArray];
                array[posArray] = array[posArray + 1];
                array[posArray + 1] = temporal;
                desorden = true;
            }
        }
    }
    return array;
}
;
function buscar(elemento) {
    for (var posArray = 0; posArray < arregloUno.length; posArray++) {
        if (arregloUno[posArray] == elemento) {
            return true;
        }
    }
    return false;
}
function agregar() {
    var nombNew = readlineSync.question("Nombre a agregar: ");
    for (var posArray = 0; posArray < arregloUno.length; posArray++) {
        if (posArray == arregloUno.length) {
            array.splice(posArray, 1, nombNew);
        }
    }
}
function eliminar(elemento) {
    for (var posArray = 0; posArray < arregloUno.length; posArray++) {
        if (arregloUno[posArray] == elemento) {
            array.splice(posArray, 1);
        }
    }
}
