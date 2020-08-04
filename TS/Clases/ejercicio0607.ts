import * as readlineSync from "readline-sync";
let arregloUno : string[] = [];
let array : string[] = []; 
let indice : number; let nombSeek : string;
let tope : number; let seguir : boolean = true; let encontrado : boolean;

tope = readlineSync.questionInt("Cuantos nombres vas a agregar?: ");
cargarNombres(tope);

function cargarNombres(tope:number) {
    console.log("***************** CARGANDO DATOS ********************");
    for (indice = 0; indice < tope; indice++) {
        arregloUno[indice] = readlineSync.question("Escribe el nombre: ");
    }
    console.log("DATOS CARGADOS");
    ordenarArray(arregloUno);
    opciones(seguir);
};

function opciones(seguir:boolean){
    console.log("***************** SELECCIONE UNA OPCION ********************");
    console.log("*****************      [1]  BUSCAR      ********************");
    console.log("*****************      [2]  AGREGAR     ********************");
    console.log("*****************      [3]  ELIMINAR    ********************");
    console.log("*****************      [4]  SALIR       ********************");
    let opcion : number;
    let opValida : boolean = false;
    while (opValida == false){
        opcion = readlineSync.questionInt("¿Que deseas hacer?: ");
        if (opcion === 1){
            nombSeek = readlineSync.question("Nombre a buscar: ");
            if (buscar(nombSeek) == true) {
                console.log(nombSeek + " fue encontrado en el registro ;-P");
            } else {
                console.log(nombSeek + " NO fue encontrado en el registro x.X");
            }
        } else if (opcion === 2){
            agregar();
        } else if (opcion === 3){
            nombSeek = readlineSync.question("Nombre a buscar: ");
            if (buscar(nombSeek) == true) {
                eliminar(nombSeek);
            } else {
                console.log(nombSeek + " NO fue encontrado en el registro x.X");
            }
        } if (opcion == 4){
            opValida=true;
        } else {
            opValida = false;
            console.log("Opcion invalida");
        }
    }
}

function ordenarArray(array : string[]) : string[] {
    let desorden : boolean = false;
    while (desorden) {
        console.log("Entré al while");
        desorden = false;
        for (let posArray:number = 0; posArray < array.length; posArray++){
            console.log("Entré al for------ pos es",posArray);
            if (array[posArray] > array[posArray+1]) {
                let temporal:string = array[posArray];
                array[posArray]=array[posArray+1];
                array[posArray+1]=temporal;
                desorden = true;
            } 
        }
    }
    return array;
};

function buscar(elemento:string) : boolean {
    for (let posArray:number = 0; posArray < arregloUno.length; posArray++){
        if (arregloUno[posArray] == elemento) {
            return true;
        } 
    }
    return false;
}


function agregar() {
    let nombNew : string = readlineSync.question("Nombre a agregar: ");
    for (let posArray:number = 0; posArray < arregloUno.length; posArray++){
        if (posArray == arregloUno.length) {
            array.splice(posArray,1,nombNew);
        } 
    }
}

function eliminar(elemento:string) {
    for (let posArray:number = 0; posArray < arregloUno.length; posArray++){
        if (arregloUno[posArray] == elemento) {
            array.splice(posArray,1);
        } 
    }
}

