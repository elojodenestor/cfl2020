"use strict";
let existenTareas = false;

let btnAg = document.getElementById("botonQueAgrega");
btnAg.addEventListener("click", fcnAgregar);

let btnSeek = document.getElementById("botonQueLimpia");
btnSeek.addEventListener("click", fcnLimpiar);



function fcnAgregar() {
    let tarea = document.getElementById("tareaIngresada").value;
    if (tarea == "") {
        alert("Debe introducir una tarea");
    } else {
        let lisTareas = document.getElementById("lastareas");
        let olTask = document.createElement("li");
        olTask.innerHTML = "Tarea -------> " + tarea;
        lisTareas.appendChild(olTask);
        document.getElementById("tareaIngresada").value = "";
        existenTareas = true;
    }
}


function fcnLimpiar() {
    if (existenTareas) {
        let lisTareas = document.getElementById("lastareas");
        lisTareas.innerHTML = "";
        existenTareas = false;
    } else {
        alert("Debe ingresar al menos una tarea");
    }
}