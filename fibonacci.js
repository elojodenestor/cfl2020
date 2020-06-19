let fibonacci = (numero) => {
    let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
}

console.log("fibonacci", fibonacci(8));
console.log("********************************");

/*let fibo = (num) => {
    let arreglo = [0,1];
    if(num==0){
        arreglo.push(0);
    }
    else if(num==1){
        arreglo.push(1);
    }
    else{
        arreglo.push(fibo(arreglo[num-2])+ fibo(arreglo[num-1]));
    }
    return arreglo;
}

console.log("fibo recursivo",fibo(8)); */