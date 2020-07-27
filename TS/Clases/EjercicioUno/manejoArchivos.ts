import * as fs from 'fs';

let archivo : string = fs.readFileSync("personas.txt","utf-8");

let nombres : string[] = archivo.split(",");
console.log("los nombres son");
console.log(nombres);
