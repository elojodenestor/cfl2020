"use strict";

let boton = document.getElementById("botonQueSimula");
boton.addEventListener("click", simularDados);

function simularDados() {
    let dado1 = 0;
    let dado2 = 0;
    let dadoS = 0;
    let cuantosSietes = 0;
    for (let veces = 0; veces < 1000; veces++) {
        dado1 = Math.floor(Math.random() * (7 - 1) + 1);
        dado2 = Math.floor(Math.random() * (7 - 1) + 1);
        dadoS = dado1 + dado2;
        if (dadoS == 7) {
            cuantosSietes++;
            console.log(cuantosSietes);
        }
    }
    document.getElementById("peDeResultado").innerHTML = cuantosSietes;
}