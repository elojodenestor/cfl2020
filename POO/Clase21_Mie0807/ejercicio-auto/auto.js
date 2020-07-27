"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var leerTeclado = require('readline-sync');
var fs = __importStar(require("fs"));
var Auto = /** @class */ (function () {
    function Auto(pat, marc, mod, anio, duenio) {
        this.patente = pat;
        this.brand = marc;
        this.model = mod;
        this.year = anio;
        (typeof (duenio) != "string") ? this.owner = "Auto de Agencia" : this.owner = duenio;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.EmptyCar = function () {
        return new Auto("", "", "", 0, "");
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listadeAutos) {
        this.listadoAutos = listadeAutos;
        this.posicion = -1;
    }
    RegistroAutomotor.prototype.buscarAuto = function (patente) {
        var findAuto = Auto.EmptyCar();
        for (var i = 0; i < this.listadoAutos.length; i++) {
            if (patente == this.listadoAutos[i].getPatente()) {
                this.posicion = i;
                findAuto = this.listadoAutos[i];
            }
        }
        return findAuto;
    };
    RegistroAutomotor.prototype.darDialta = function (miCarrito) {
        this.listadoAutos.push(miCarrito);
    };
    RegistroAutomotor.prototype.darDeBaja = function (patenteDelauto) {
        var auto = this.buscarAuto(patenteDelauto);
        if (typeof (auto) == "object") {
            this.listadoAutos.splice(this.posicion, 1);
            console.log("Registro Eliminado");
        }
        else {
            console.log("La patente no existe");
        }
    };
    return RegistroAutomotor;
}());
var archivo = fs.readFileSync("regAutomotriz.txt", "utf-8");
//let archivoFinal : string = fs.writeFileSync("regAutomotriz.txt","utf-8");
var arrayRegistro = archivo.split("\r\n");
var regAutos = new RegistroAutomotor(crearAutos(arrayRegistro));
function crearAutos(array) {
    var arrayAutos = [];
    for (var pos = 0; pos < array.length; pos++) {
        var arrayAutito = [];
        arrayAutito = array[pos].split(",");
        var p = arrayAutito[0];
        var m = arrayAutito[1];
        var mo = arrayAutito[2];
        var y = parseInt(arrayAutito[3]);
        var d = void 0;
        (arrayAutito.length >= 3) ? d = arrayAutito[4] : d = "Auto de Agencia";
        var nuevoAuto = new Auto(p, m, mo, y, d);
        arrayAutos[pos] = nuevoAuto;
    }
    return arrayAutos;
}
menu();
function menu() {
    var goOn = true;
    while (goOn) {
        console.log(" * * * * *  [ MENÚ ]  * * * * * *  ");
        console.log("[1] Ver el registro automotor");
        console.log("[2] Consultar el registro de un auto");
        console.log("[3] Agregar un auto al registro");
        console.log("[4] Quitar un auto del registro");
        console.log("[5] Salir del sistema");
        var option = leerTeclado.questionInt("Elija una opción: ");
        (sistema(option) === 1) ? goOn = true : goOn = false;
    }
}
function sistema(option) {
    switch (option) {
        case 1:
            console.log(regAutos);
            return 1;
        case 2:
            var patConsultada = leerTeclado.question("Introduzca la patente a consultar: ");
            var resultadoBusqueda = regAutos.buscarAuto(patConsultada);
            if (resultadoBusqueda.getPatente() == "") {
                console.log("Esa patente NO forma partre del registro automotor");
            }
            else {
                console.log(resultadoBusqueda);
            }
            ;
            return 1;
        case 3:
            var patNueva = leerTeclado.question("Introduzca la patente del nuevo auto: ");
            if (regAutos.buscarAuto(patNueva).getPatente() == "") {
                var m = leerTeclado.question("Introduzca la marca: ");
                var mo = leerTeclado.question("Introduzca el modelo: ");
                var y = leerTeclado.questionInt("Introduzca el año: ");
                var own = leerTeclado.question("Introduzca el propietario [presione enter si es nuevo de Agencia]: ");
                ;
                var d = void 0;
                (own.length > 1) ? d = own : d = "Auto de Agencia";
                var nuevoAuto = new Auto(patNueva, m, mo, y, d);
                regAutos.darDialta(nuevoAuto);
                //archivoFinal.includes();
                console.log("El auto fue agregado al registro automotor");
            }
            else {
                console.log("La patente que intenta ingresar como nueva YA existe");
            }
            return 1;
        case 4:
            var patEliminar = leerTeclado.question("Introduzca la patente que desea eliminar del registro: ");
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
