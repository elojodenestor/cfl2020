"use strict";

class Alumno {
    constructor(nombre, nota1, nota2, nota3) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
}

let btnAg = document.getElementById("botonQueAgrega");
btnAg.addEventListener("click", function(e) {
    let miP = document.getElementById("peClick");
    miP.classList.add("ver");
    fcnAgregar();
});
let total = 0;
let alumnoS = [];
let nomBuscado;
let bandera = false;
let btnSeek = document.getElementById("botonQueBusca");
btnSeek.addEventListener("click", function(e) {
    nomBuscado = document.getElementById("buscado").value;
    fcnBuscar(nomBuscado);
})



function fcnAgregar() {
    if (document.getElementById("nombre").value == "") {
        alert("Debe introducir el Nombre del Alumno");
    } else {
        if (document.getElementById("nota1").value == "" | document.getElementById("nota2").value == "" | document.getElementById("nota3").value == "") {
            alert("Debe introducir todas las notas");
        } else {
            let nombreA = document.getElementById("nombre").value;
            let nota1 = parseFloat(document.getElementById("nota1").value);
            let nota2 = parseFloat(document.getElementById("nota2").value);
            let nota3 = parseFloat(document.getElementById("nota3").value);
            let alumnito = new Alumno(nombreA, nota1, nota2, nota3);
            alumnoS.push(alumnito);
            //total++;
            let datAlum = document.getElementById("lasnotas");
            let olAlumnos = document.createElement("li");
            olAlumnos.innerHTML = "Alumno: " + nombreA + " // Nota 1: " + nota1 + " // Nota 2: " + nota2 + " // Nota 3: " + nota3;
            datAlum.appendChild(olAlumnos);
            document.getElementById("nombre").value = "";
            document.getElementById("nota1").value = "";
            document.getElementById("nota2").value = "";
            document.getElementById("nota3").value = "";
        }
    }
}

function fcnBuscar(buscado) {
    for (let pos = 0; pos < alumnoS.length; pos++) {
        if (buscado === alumnoS[pos].nombre) {
            let promedio = (alumnoS[pos].nota1 + alumnoS[pos].nota2 + alumnoS[pos].nota3) / 3;
            let alumSeek = document.getElementById("Resultados");
            let aquiEsta = document.createElement("p");
            aquiEsta.innerHTML = "El alumno " + buscado + " Tiene un promedio de: " + promedio + " puntos";
            alumSeek.appendChild(aquiEsta);
            return;
        } else {
            if (pos == alumnoS.length - 1) {
                alert("El alumno ingresado no existe");
            }
        }
    }
}