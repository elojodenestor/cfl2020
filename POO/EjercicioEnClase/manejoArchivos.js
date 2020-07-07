"use strict";
exports.__esModule = true;
var fs = require("fs");
var archivo = fs.readFileSync("personas.txt", "utf-8");
var nombres = archivo.split(",");
console.log("los nombres son");
console.log(nombres);
