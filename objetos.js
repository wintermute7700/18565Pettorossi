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
/* constructor */
function Operario (nombreArg, legajoArg, fabricaArg){
    this.nombre = nombreArg;
    this.legajo = legajoArg;
    this.fabrica = fabricaArg;
}