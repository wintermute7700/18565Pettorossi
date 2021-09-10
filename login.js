
do{
    numLeg = parseInt(prompt("Ingrese usuario"))
    let legajos = ["218","222","223","238","239","266"];
    for(let i=0; i<legajos.length; i++){
        if(legajos[i] == numLeg){
            leg=legajos[i];
            alert("Usuario Correcto");
        }
    }
}while (leg = numLeg); 
console.log("fin bucle");