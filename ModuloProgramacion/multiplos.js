let valor;
let numero=1;
// let multiplo=0;
let resto=0;

function multiplo(valor, multiplo){
    resto = valor % multiplo;
    if (resto == 0 ){
        return true;
    } else {
        return false;
    }
}

for (numero > 0; numero <= 100; numero++) {
    if (multiplo(numero,2)){
        console.log(numero,"es multiplo de dos");
    } else if (multiplo(numero,3)){
        console.log(numero,"es multiplo de tres");
    }
}