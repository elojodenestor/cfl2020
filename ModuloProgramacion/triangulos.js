let base=0; altura=0; area=0; i=1;

let calcularArea = (base,altura) => {
    area = base * altura / 2;
    return area;
}

for (i=1; i<8; i++){
    base = base  + 1;
    altura = altura + 2;
    console.log("Para un triángulo de base",base,"y altura",altura);
    console.log("Su area es ",calcularArea(base,altura));
}

