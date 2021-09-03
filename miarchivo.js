
/* ingreso novedades por consola como objetos */
function Novedad (legajo, operacion, tiempo){
    this.legajo = legajo;
    this.operacion = operacion;
    this.tiempo = tiempo;
}
/* console.log = new Novedad (321, 976000, 80); */
/* operarios.push(Novedad) */

let novedad0 = new Novedad(321,976000,80);
let novedad1 = new Novedad(218,810000,200);

/* let novedadS =[novedad0, novedad1]; */
/* console.log=new Novedad(324,922144,53) */
/* console.log(novedadS) ver array*/
//-----------------------------------------------------------------------------------------------------------------------------------
/* DOM agregando nodos */
/* let nodoUL =document.getElementById ("ONP");
let operarios =[{legajo: 238, operacion: 976144, tiempo: 50},
    {legajo: 223, operacion: 810000, tiempo: 480},
    {legajo: 266, operacion: 900177, tiempo: 120},
    {legajo: 218, operacion: 922143, tiempo: 10}];
for (const operario of operarios){
    let li =document.createElement("li");
    li.innerHTML =operario.operacion;
    nodoUL.appendChild(li);
} */

//-----------------------------------------------------------------------------------------------------------------------------------
let nodoUL =document.getElementById ("ONP")
let newsO = [{legajo:321, operacion: 976144, tiempo: 45},
                {legajo: 223, operacion: 810000, tiempo: 480},
                {legajo: 266, operacion: 900177, tiempo: 6},
                {legajo: 146, operacion: 954155, tiempo: 82},
                {legajo: 310, operacion: 971163, tiempo: 120},
                {legajo: 284, operacion: 880000, tiempo: 24},
                {legajo: 339, operacion: 830000, tiempo: 320},
                {legajo: 305, operacion: 976264, tiempo: 75},
                {legajo: 218, operacion: 922143, tiempo: 10}];

for (const news of newsO){
    let contenedor=document.createElement("ul");
    contenedor.innerHTML=`<li> legajo: ${news.legajo} operacion: ${news.operacion} tiempo: ${news.tiempo}</li>`;
    nodoUL.appendChild(contenedor);
}
//-----------------------------------------------------------------------------------------------------------------------------------
/* ingreso numero legajo */
let numLeg = parseInt(prompt("Ingrese numero de legajo"));
let legajos = ["218","222","223","238","239","266"];
for(let i=0; i<legajos.length; i++){
    if (legajos[i] == numLeg){ 
        alert("Operario Correcto" + legajos[i]);
    }
} 

//-----------------------------------------------------------------------------------------------------------------------------------
/* contador onp */
/* let fabrica = parseInt(prompt("Ingrese numero de fabrica 1 o 2"));
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
} */
//-----------------------------------------------------------------------------------------------------------------------------------

/* console.log(operario218.legajo);
console.log(operario218.nombre);
console.log(operario218.fabrica); */

//-----------------------------------------------------------------------------------------------------------------------------------

/* const operario321 = new Operario("Pettorossi Leonardo", 321, "0-data entry"); */
/* console.log(operario321.legajo);
console.log(operario321.nombre);
console.log(operario321.fabrica); */