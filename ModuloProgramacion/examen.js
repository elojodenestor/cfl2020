let readlineSync = require('readline-sync');
let dia = 32; mes = 15; annio = 2019; fecha=undefined; mBiciesto = false; aBiciesto =false;

let obtenerFecha = () => {
    fechaLista = false;
    while (annio != 2020){
        annio = readlineSync.questionInt("Escriba el año: ");
        if (annio % 4 == 0) {
            let aBiciesto = true;
        } 
    }

    while (mes < 0 || mes > 12) {
        mes = readlineSync.questionInt("Escriba el numero del mes: ");
       if (mes == 2){
           let mBiciesto = true;
        }  
    }
    
    while (dia < 0 || dia > 31) {
        dia = readlineSync.questionInt("Escriba el numero del dia: ");
        if (aBiciesto && mBiciesto && dia > 28){
            console.log("introduzca un numero valido Febrero de ese año es Biciesto");
        }
          
    }
    //return fecha = new Date(annio,mes,dia);
};

let calcularDias = () => {
    //let ultimaFecha = new Date(2020,12,31);
    let meses = 12-mes;
    let dias = 31-dia;
    return console.log("Desde el",dia+"/"+mes,"para finalizar el año, faltan",(meses*30)+dias,"dias");
}
obtenerFecha();
calcularDias();
