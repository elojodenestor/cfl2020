"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }
    Telefono.prototype.mandarMensaje = function (smsA, mensaje) {
        return "Enviando: " + mensaje + " al numero " + smsA;
    };
    Telefono.prototype.hacerLlamada = function (llamarA) {
        return "Llamando al " + llamarA;
    };
    Telefono.prototype.prenderApagar = function (estaPrendido) {
        //(estaPrendido == true)? this.estaPrendido = true : this.estaPrendido = false;
        this.estaPrendido = (estaPrendido == true) ? true : false;
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(estaPrendido, bateriaActual) {
        var _this = _super.call(this, estaPrendido, bateriaActual) || this;
        _this.tieneCamara = true;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        return "Di guisssskiiiiii";
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(estaPrendido, bateriaActual, frecuencia) {
        var _this = _super.call(this, estaPrendido, bateriaActual) || this;
        _this.frecuenciaActual = frecuencia;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    return TelefonoConRadio;
}(Telefono));
daleChe();
function daleChe() {
    var celConCam = new TelefonoConCamara(true, 95);
    var celConRadio = new TelefonoConRadio(true, 84, 950);
    console.log("Probemos tomar una fotito...");
    console.log(celConCam.sacarFoto());
    console.log("Llamemos al Guachiturro ahora...");
    console.log(celConCam.hacerLlamada(2494347690));
    console.log("veamos la radio AM...");
    console.log(celConRadio.verFrecuenciaActual());
    console.log("Chao, Cheo");
}
