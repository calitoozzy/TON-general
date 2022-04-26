// 1-Programa con 2 numeros

let numeroA = parseInt(prompt("Ingrese el 1 Numero "));
let numeroB = parseInt(prompt("Ingrese el 2 Numero "));

if (numeroA > numeroB) {
    alert(numeroB + " Es menor que " + numeroA);
} else
    alert(numeroA + " Es menor que " + numeroB)



//2-Identificar numeros pares/impares
let numero = 0;
numero = parseInt(prompt("Indique un número: ", " "));
if ((numero % 2) == 0) {
    console.log(numero + " Es par ");
} else {
    console.log(numero + " Es impar ");
}

//3-Declarar una variable que se llame ganeLaCarrera
let ganeLaCarrera = false;
if (ganeLaCarrera == true) {
    console.log("Ganaste");
} else {
    console.log("Perdiste");
}

//4-

let posicionEnLaCarrera = 6;

//5-


//6-
let facturaTotal = parseInt(prompt("ingrese el monto de su factura "));
descuento = (facturaTotal * 0.20);
seAplicaDescuento = 1000;
if (facturaTotal > seAplicaDescuento) {
    alert("Se aplico 20% de descuento su total es " + (facturaTotal - descuento));
} else {
    alert("Su compra no tiene descuento su total es " + facturaTotal);
}

//7-

let montoVendido = parseInt(prompt("Ingrese el monto vendido "));
codigoDelVendedor = prompt("ingrese su codigo ");


//8-
let d = prompt("Ingrese el numero del dia en el que esta ");

if (d == 1) {
    alert("hoy es lunes")
} if (d == 2) {
    alert("hoy es martes")
} else if (d == 3) {
    alert("hoy es martes")
} else if 




//9-


//10-
let recibos = prompt("ingrese el monto de su factura ");
descuento = (recibos * 0.15);
seAplicaDescuento = 100;
if (recibos > seAplicaDescuento) {
    alert("Se aplico 15% de descuento su total es " + (recibos - descuento));
} else {
    alert("Su compra no tiene descuento su total es " + recibos);
}
