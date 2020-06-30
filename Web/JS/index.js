let masUno = 0;
let menosUno = 0;
let vamosSumando = 0;

function aumentar() {
    let nodoIn = document.getElementById("numero");
    if (document.getElementById("h3masuno").innerHTML == ".") {
        let valor = nodoIn.value;
        masUno = valor++;
        masUno++;
    } else {
        masUno++;
    }
    document.getElementById("h3masuno").innerHTML = masUno;
}

function restar() {
    let valor = document.getElementById("numero").value;
    if (document.getElementById("h3menosuno").innerHTML == ".") {
        menosUno = valor--;
        menosUno--;
    } else {
        menosUno--;
    }
    document.getElementById("h3menosuno").innerHTML = menosUno;
}

function sumar() {
    let valor = document.getElementById("numero").value;
    if (document.getElementById("h3quesuma").innerHTML == ".") {
        vamosSumando = valor * 2;
    } else {
        vamosSumando = parseInt(vamosSumando) + parseInt(valor);
        //console.log("Valor", valor);
        //console.log("Vamos Sumando", vamosSumando);
    }
    document.getElementById("h3quesuma").innerHTML = vamosSumando;
}