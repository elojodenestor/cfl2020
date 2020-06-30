let readlineSync = require('readline-sync');
let arrayButacas = []; asientosEnLaFila = 0;

// ********************************************************************
// *************************** Funciones ******************************
// ********************************************************************

let generarButacas = (asientosEnLaFila) => {
    for (let posicion=0; posicion < asientosEnLaFila; posicion++) {
        arrayButacas[posicion] = Math.round((Math.random() * 1)+ 0) === 1; // genera un valor aleatorio true o false
    }
};

let determinarButacasDesocupadas = (asientosEnLaFila) => {
    let cantidadButacasDesocupadas = 0;
    for (let posicion=0; posicion < asientosEnLaFila; posicion++) {
        if (!arrayButacas[posicion]) {         //si el valor es en [posicion] es false...
            cantidadButacasDesocupadas++;      //incrementa el contador de desocupadas
        }
    }
    console.log("La cantidad de butacas desocupadas, de",asientosEnLaFila,"disponibles, es",cantidadButacasDesocupadas);
}

// ********************************************************************************
// *************************** ingresar # de butacas ******************************
// ********************************************************************************

asientosEnLaFila = readlineSync.questionInt("Ingrese la cantidad de butacas en la fila: ");

// **********************************************************************************
// *************************** Llamado a las Funciones ******************************
// **********************************************************************************

generarButacas(asientosEnLaFila);
determinarButacasDesocupadas(asientosEnLaFila);