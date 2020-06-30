let camila = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let franco = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let sofia = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]; 
let matias = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006]; 
let agustina = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];
let vendedores = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];
let ventasDe = [camila,franco,sofia,matias,agustina];
let nombreVendedor = "";

// ******************** INDIVIDUALES **********************

let ventaMaxima = (nombreVendedor, ventas) => {
    let ventaMaxima = 0; queSemana = 0; queMes = 0;
    for (let posicion = 0; posicion < ventas.length; posicion++){
        if (ventas[posicion] > ventaMaxima) {
            ventaMaxima = ventas[posicion];
            queSemana = posicion+1;
            if (queSemana < 4){
                queMes = 1;
            } else {
                if (queSemana < 8){
                    queMes = 2;
                } else {
                    queMes = 3;
                }
            } 
        }
    }
    console.log("//////                         /////////");
    console.log("////// INFORMACION DE VENTAS DE", nombreVendedor,"/////////");
    console.log("tuvo su maxima venta de $",ventaMaxima);
    console.log("en la semana",queSemana,"del Trimestre. Es decir, en el mes",queMes);
    return;
}

let ventaMinima = (ventas) => {
    let ventaMinima = 50000000; queSemana = 0; queMes = 0;
    for (let posicion = 0; posicion < ventas.length; posicion++){
        if (ventas[posicion] < ventaMinima) {
            ventaMinima = ventas[posicion];
            queSemana = posicion + 1;
            if (queSemana < 4){
                queMes = 1;
            } else {
                if (queSemana < 8){
                    queMes = 2;
                } else {
                    queMes = 3;
                }
            } 
            
        }
    }
    console.log("tuvo su menor venta de $",ventaMinima);
    console.log("en la semana",queSemana,"del Trimestre. Es decir, en el mes",queMes);
    return;
}

let promediosDeVenta = (ventas) => {
    let ventasTotales = 0; mes1 = 0; mes2 = 0; mes3 = 0;
    for (let posicion = 0; posicion < ventas.length; posicion++){
        ventasTotales = ventasTotales + ventas[posicion];
        if (posicion < 4) {
            mes1 = mes1 + ventas[posicion];
        } else {
            if (posicion < 8){
                mes2 = mes2 + ventas[posicion];
            } else {
                mes3 = mes3 + ventas[posicion];
            }
        } 
    }
    console.log("tuvo un promedio semanal de ventas de $",ventasTotales/12);
    console.log("Y mensualmente promedio:");
    console.log("El 1er mes del Trimestre, $",mes1/4);
    console.log("El 2do mes del Trimestre, $",mes2/4);
    console.log("El 3er mes del Trimestre, $",mes3/4);
    console.log("//////                         /////////");
    return;
}

let buscarVendedor = () => {
    for (let i=0; i<vendedores.length;i++){
        ventaMaxima(vendedores[i],ventasDe[i]);
        ventaMinima(ventasDe[i]);
        promediosDeVenta(ventasDe[i]);
    }
}

// ******************** GRUPALES **********************
let mejorVendedorSemanal = () => {
    let mayorVenta = []; mayorVendedor = [];
    for (let posicion = 0; posicion < 12; posicion++){
        let arrayTemporalVentas = [camila[posicion],franco[posicion],sofia[posicion],matias[posicion],agustina[posicion]];
        mayorVenta[posicion] = 0; mayorVendedor[posicion]="";
        for (let i = 0; i < 5; i++) {
            if (arrayTemporalVentas[i] > mayorVenta[posicion]){
                mayorVenta[posicion] = arrayTemporalVentas[i];
                if (i == 0) {
                    mayorVendedor[posicion] = "Camila";
                } else if (i == 1) {
                    mayorVendedor[posicion] = "Franco";
                } else if (i == 2) {
                    mayorVendedor[posicion] = "Sofia";
                } else if (i == 3) {
                    mayorVendedor[posicion] = "Matias";
                } else if (i == 4) {
                    mayorVendedor[posicion] = "Agustina";
                }
            }
        }
        console.log("En la semana",posicion+1,"el mejor vendedor fue",mayorVendedor[posicion], "con $",mayorVenta[posicion]);
    }
    return;
}

let mejorVendedorMensual = () => {
    let mayorVenta = []; mayorVendedor = []; semanita = 3; pos = 0;
    let mes = 1;
    while (semanita < 12) {
        let camilaTemp = francoTemp = sofiTemp = matiTemp = agusTemp = 0;
        
        for (let posicion = pos; posicion < semanita; posicion++){
            camilaTemp += camila[posicion];
            francoTemp += franco[posicion];
            sofiTemp += sofia[posicion];
            matiTemp += matias[posicion];
            agusTemp += agustina[posicion];
        }
        
        let arrayTemporalVentas = [camilaTemp,francoTemp,sofiTemp,matiTemp,agusTemp];
        mayorVenta[mes] = 0; mayorVendedor[mes]="";

        for (let i = 0; i < 5; i++) {
            if (arrayTemporalVentas[i] > mayorVenta[mes]){
                mayorVenta[mes] = arrayTemporalVentas[i];
                if (i == 0) {
                    mayorVendedor[mes] = "Camila";
                } else if (i == 1) {
                    mayorVendedor[mes] = "Franco";
                } else if (i == 2) {
                    mayorVendedor[mes] = "Sofia";
                } else if (i == 3) {
                    mayorVendedor[mes] = "Matias";
                } else if (i == 4) {
                    mayorVendedor[mes] = "Agustina";
                }
            }
        }
        console.log("En el mes",mes,"el mejor vendedor fue",mayorVendedor[mes], "con $",mayorVenta[mes]);
    
    semanita += 4;
    pos += 4;
    mes += 1
    }
    return;
}
    
let peorVendedorMensual = () => {
    let peorVenta = []; peorVendedor = []; semanita = 3; pos = 0;
    let mes = 1;
    while (semanita < 12) {
        let camilaTemp = francoTemp = sofiTemp = matiTemp = agusTemp = 0;
        
        for (let posicion = pos; posicion < semanita; posicion++){
            camilaTemp += camila[posicion];
            francoTemp += franco[posicion];
            sofiTemp += sofia[posicion];
            matiTemp += matias[posicion];
            agusTemp += agustina[posicion];
        }
        
        let arrayTemporalVentas = [camilaTemp,francoTemp,sofiTemp,matiTemp,agusTemp];
        peorVenta[mes] = 999999999; peorVendedor[mes]="";

        for (let i = 0; i < 5; i++) {
            if (arrayTemporalVentas[i] < peorVenta[mes]){
                peorVenta[mes] = arrayTemporalVentas[i];
                if (i == 0) {
                    peorVendedor[mes] = "Camila";
                } else if (i == 1) {
                    peorVendedor[mes] = "Franco";
                } else if (i == 2) {
                    peorVendedor[mes] = "Sofia";
                } else if (i == 3) {
                    peorVendedor[mes] = "Matias";
                } else if (i == 4) {
                    peorVendedor[mes] = "Agustina";
                }
            }
        }
        console.log("En el mes",mes,"el peor vendedor fue",peorVendedor[mes], "con $",peorVenta[mes]);
    
    semanita += 4;
    pos += 4;
    mes += 1
    }
    return;
}

console.log("*********************************** INDIVIDUALES ************");
buscarVendedor();
console.log("*********************************** GRUPALES ************");
mejorVendedorSemanal();
mejorVendedorMensual();
peorVendedorMensual();

//me falto el ultimo punto, del peor vendedor del trimestre