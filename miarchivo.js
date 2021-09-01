/* ingreso numero legajo */
let numLeg = parseInt(prompt("Ingrese numero de legajo"));
let legajos = ["218","222","223","238","239","266"];
/* let operarios=[operario218,operario222,operario223,operario238,operario239,operario266]; */
for(let i=0; i<legajos.length; i++){
    if (legajos[i] == numLeg){ 
        alert("Operario Correcto" + legajos[i]);
    }
}

/* contador onp */
let fabrica = parseInt(prompt("Ingrese numero de fabrica 1 o 2"));
if (fabrica == 1){
    let operacion = parseInt(prompt("ingrese numero de operacion"));
    let tiempo = parseInt(prompt("ingrese tiempo en minutos")); 
    alert("Operario: " + numLeg + "Operacion: " + operacion + "Tiempo: " + tiempo);
    let tiempoRestante = parseInt(540-tiempo);
    alert("El tiempo restante es: " + tiempoRestante);
}else if (fabrica == 2){
    let operacion = parseInt(prompt("ingrese numero de operacion"));
    let tiempo = parseInt(prompt("ingrese tiempo en minutos")); 
    alert("Operario: " + numLeg + "Operacion: " + operacion + "Tiempo: " + tiempo);
    let tiempoRestante = parseInt(480-tiempo);
    alert("El tiempo restante es: " + tiempoRestante);
}
else{
    alert("fabrica incorrecta");
}

/* objetos */
const operario218 ={
    nombre: "Martin Godoy",
    legajo: 218,
    fabrica: "1-ensamble",
}
const operario222 ={
    nombre: "Angel Luna",
    legajo: 222,
    fabrica: "1-ensamble",
}
const operario223 ={
    nombre: "Andres Nannini",
    legajo: 223,
    fabrica: "1-ensamble",
}
const operario238 ={
    nombre: "Claudio Zara",
    legajo: 238,
    fabrica: "2-mecanizado",
}
const operario239 ={
    nombre: "Salinas Leon",
    legajo: 239,
    fabrica: "2-mecanizado",
}
const operario266 ={
    nombre: "Ortiz Dario",
    legajo: 266,
    fabrica: "2-mecanizado",
}
/* console.log(operario218.legajo);
console.log(operario218.nombre);
console.log(operario218.fabrica); */

/* constructor */
function Operario (nombreArg, legajoArg, fabricaArg){
    this.nombre = nombreArg;
    this.legajo = legajoArg;
    this.fabrica = fabricaArg;
}

/* const operario321 = new Operario("Pettorossi Leonardo", 321, "0-data entry"); */
/* console.log(operario321.legajo);
console.log(operario321.nombre);
console.log(operario321.fabrica); */