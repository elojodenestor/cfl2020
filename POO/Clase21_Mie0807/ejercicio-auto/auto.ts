import * as ReadlineSync from "readline-sync";
let leerTeclado = require('readline-sync');
import * as fs from "fs";

class Auto {
    private patente: string;
    private brand: string;
    private model: string;
    private year: number;
    private owner: string;

    public constructor(pat: string, marc: string, mod: string, anio: number, duenio: string) {
        this.patente = pat;
        this.brand = marc;
        this.model = mod;
        this.year = anio;
        (typeof(duenio) != "string" ) ? this.owner = "Auto de Agencia" : this.owner = duenio;
    }

    public getPatente(): string {
        return this.patente;
    }

    static EmptyCar() : Auto {
        return new Auto ("","","",0,"");
    }
}

class RegistroAutomotor {
    private listadoAutos: Auto[];
    private posicion : number;

    public constructor(listadeAutos: Auto[]) {
        this.listadoAutos = listadeAutos;
        this.posicion = -1;
    }
    
    public buscarAuto(patente: string): Auto {
        let findAuto : Auto = Auto.EmptyCar();
        for (let i: number = 0; i < this.listadoAutos.length; i++) {
            if (patente == this.listadoAutos[i].getPatente()) {
                this.posicion = i;
                findAuto = this.listadoAutos[i];
            }
        }
        return findAuto;
    }

    public darDialta(miCarrito : Auto) {
        this.listadoAutos.push(miCarrito);
    }

    public darDeBaja(patenteDelauto : string) {
        let auto : Auto = this.buscarAuto(patenteDelauto);
        if(typeof(auto) == "object"){
            this.listadoAutos.splice(this.posicion,1);
            console.log("Registro Eliminado");
        } else {
            console.log("La patente no existe");
        }
    }
}

let archivo : string = fs.readFileSync("regAutomotriz.txt","utf-8");
//let archivoFinal : string = fs.writeFileSync("regAutomotriz.txt","utf-8");
let arrayRegistro : string[] = archivo.split("\r\n");
let regAutos : RegistroAutomotor = new RegistroAutomotor(crearAutos(arrayRegistro))

function crearAutos(array:string[]) : Auto[] {
    let arrayAutos : Auto[] = [];
    for (let pos : number = 0; pos < array.length;pos++){
        let arrayAutito : string[] = [];
        arrayAutito = array[pos].split(",");
        let p : string = arrayAutito[0];
        let m : string = arrayAutito[1];
        let mo : string = arrayAutito[2];
        let y : number =  parseInt(arrayAutito[3]);
        let d : string;
        (arrayAutito.length >= 3) ? d = arrayAutito[4] : d = "Auto de Agencia";
        let nuevoAuto : Auto = new Auto(p,m,mo,y,d);
        arrayAutos[pos] = nuevoAuto;
    }
    return arrayAutos;
}

menu();

function menu() {
    let goOn : boolean = true;
    while (goOn) {
        console.log(" * * * * *  [ MENÚ ]  * * * * * *  ");
        console.log("[1] Ver el registro automotor");
        console.log("[2] Consultar el registro de un auto");
        console.log("[3] Agregar un auto al registro");
        console.log("[4] Quitar un auto del registro");
        console.log("[5] Salir del sistema");
        let option : number = leerTeclado.questionInt("Elija una opción: ");
        (sistema(option) === 1) ? goOn = true : goOn = false;
    }
}

function sistema(option : number) : number {
    switch (option) {
        case 1:
            console.log(regAutos)
            return 1;
        case 2:
            let patConsultada : string = leerTeclado.question("Introduzca la patente a consultar: ");
            let resultadoBusqueda : Auto = regAutos.buscarAuto(patConsultada);
            if (resultadoBusqueda.getPatente()=="") {
                console.log("Esa patente NO forma partre del registro automotor");
            } else {
                console.log(resultadoBusqueda);
            };
            return 1;
        case 3:
            let patNueva : string = leerTeclado.question("Introduzca la patente del nuevo auto: ");
            if (regAutos.buscarAuto(patNueva).getPatente() == "") {
                let m : string = leerTeclado.question("Introduzca la marca: ");
                let mo : string = leerTeclado.question("Introduzca el modelo: ");
                let y : number =  leerTeclado.questionInt("Introduzca el año: ");
                let own : string = leerTeclado.question("Introduzca el propietario [presione enter si es nuevo de Agencia]: ");;
                let d : string;
                (own.length > 1) ? d  = own : d = "Auto de Agencia";
                let nuevoAuto : Auto = new Auto(patNueva,m,mo,y,d);
                regAutos.darDialta(nuevoAuto);
                //archivoFinal.includes();
                console.log("El auto fue agregado al registro automotor");
            } else {
                console.log("La patente que intenta ingresar como nueva YA existe");
            }
            return 1;
        case 4:
            let patEliminar : string = leerTeclado.question("Introduzca la patente que desea eliminar del registro: ");
            regAutos.darDeBaja(patEliminar);
            return 1;
        case 5:
            console.log("Has salido del Sistema de Registro Automotor");
            return 0;
        default:
            console.log("Opcion incorrecta, elija una las opciones entre [ ]");
            return 1;
    }
}