"use strict";

let btnAg = document.getElementById("botonQueAgrega");
btnAg.addEventListener("click", fcnAgregar);
let contador = 0;
let total = 0;
let btnCalc = document.getElementById("botonQueCalcula");
btnCalc.addEventListener("click", fcnCalcular);


function fcnAgregar() {
    if (document.getElementById("producto").value == "") {
        alert("Debe introducir el Producto");
    } else {
        if (document.getElementById("precio").value == "") {
            alert("Debe introducir el Precio");
        } else {
            let descripcion = document.getElementById("producto").value;
            let precio = parseFloat(document.getElementById("precio").value);
            contador++;
            fcnTotal(precio);
            let prod = document.getElementById("Productos");
            let miP = document.createElement("p");
            miP.innerHTML = contador + ")     Producto: " + descripcion + " --------->      Precio: $" + precio;
            prod.appendChild(miP);
            document.getElementById("producto").value = "";
            document.getElementById("precio").value = "";
        }
    }
}

function fcnCalcular() {
    document.getElementById("peTotal").innerHTML = "$ " + total;
    document.getElementById("nombreCliente").value = "";
}

function fcnTotal(precio) {
    total = total + precio;
}