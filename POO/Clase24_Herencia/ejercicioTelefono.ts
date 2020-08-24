class Telefono {
    private estaPrendido : boolean;
    private bateriaActual : number;

    public constructor(estaPrendido : boolean, bateriaActual : number) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }

    public mandarMensaje(smsA : number, mensaje : string) : any {
        return `Enviando: ${mensaje} al numero ${smsA}`
    }

    public hacerLlamada(llamarA : number) : any{
        return  `Llamando al ${llamarA}`;
    }

    public prenderApagar(estaPrendido : boolean) {
        //(estaPrendido == true)? this.estaPrendido = true : this.estaPrendido = false;
        this.estaPrendido = (estaPrendido == true)? true : false;
    }
}

class TelefonoConCamara extends Telefono{   
    private tieneCamara : boolean;

    public constructor(estaPrendido : boolean, bateriaActual : number){
        super(estaPrendido,bateriaActual);
        this.tieneCamara = true;
    }

    public sacarFoto() {
        return "Di guisssskiiiiii";
    }
}

class TelefonoConRadio extends Telefono{   
    private frecuenciaActual : number;

    public constructor(estaPrendido : boolean, bateriaActual : number, frecuencia : number){
        super(estaPrendido,bateriaActual);
        this.frecuenciaActual = frecuencia;
    }

    public verFrecuenciaActual() : number {
        return this.frecuenciaActual;
    }
}

daleChe();

function daleChe() {
    let celConCam : TelefonoConCamara = new TelefonoConCamara(true,95);
    let celConRadio : TelefonoConRadio = new TelefonoConRadio(true,84,950);

    console.log("Probemos tomar una fotito...");
    console.log(celConCam.sacarFoto());

    console.log("Llamemos al Guachiturro ahora...");
    console.log(celConCam.hacerLlamada(2494347690));

    console.log("veamos la radio AM...");
    console.log(celConRadio.verFrecuenciaActual());

    console.log("Chao, Cheo");
}