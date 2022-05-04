
// 1-Programa con 2 numeros
alert("Vamos a relizar el Ejercicio N° 1");

let numeroA = parseInt(prompt("Ingrese el 1 Numero "));
let numeroB = parseInt(prompt("Ingrese el 2 Numero "));

if (numeroA > numeroB) {
    alert(numeroB + " Es menor que " + numeroA);
} else {
    alert(numeroA + " Es menor que " + numeroB);
}


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

//4-Pocision en la carrera
let posicionEnLaCarrera = 6;

if (posicionEnLaCarrera == 1) {
    console.log("FELICITACIONES, SALISTE 1RO");
} else if (posicionEnLaCarrera == 2) {
    console.log("Te falto poquito para ganar");
} else if (posicionEnLaCarrera == 3) {
    console.log("Sos un orgullo para tu familia");
} else if (posicionEnLaCarrera > 3) {
    console.log("Volvé a tu casa")
} else {
    console.log("No tires fruta");
}

//6-descuento en factura
alert("Vamos a relizar el Ejercicio N° 6");

let facturaTotal = parseInt(prompt("Ingrese el monto de su factura "));
descuento = (facturaTotal * 0.20);
seAplicaDescuento = 1000;

if (facturaTotal > seAplicaDescuento) {
    alert("Se aplico 20% de descuento su total es " + (facturaTotal - descuento));
} else {
    alert("Su compra no tiene descuento su total es " + facturaTotal);
} 

//7-calculo de vendedor 
alert("Vamos a relizar el Ejercicio N° 7");

let montoVendido = parseInt(prompt("Ingrese el monto vendido "));
codigoDelVendedor = parseInt(prompt("Ingrese su codigo "));
comision30 = 0.30;
comision20 = 0.20;
comision10 = 0.10;
valorDeLasComisiones30 = (montoVendido * comision30);
valorDeLasComisiones20 = (montoVendido * comision20);
valorDeLasComisiones10 = (montoVendido * comision10);

if (codigoDelVendedor <= 100) {
    alert("Su codigo es " + codigoDelVendedor + " Su monto vendido es " + montoVendido + " Su comision es de " + valorDeLasComisiones30);
} else if (codigoDelVendedor >= 101 && codigoDelVendedor <= 200) {
    alert("Su codigo es " + codigoDelVendedor + " Su monto vendido es " + montoVendido + " Su comision es de " + valorDeLasComisiones20);
} else if (codigoDelVendedor <= 300) {
    alert("Su codigo es " + codigoDelVendedor + " Su monto vendido es " + montoVendido + " Su comision es de " + valorDeLasComisiones10);
}

//8-dia de la semana
alert("Vamos a relizar el Ejercicio N° 8");

let d = parseInt(prompt("Ingrese el numero del dia de la semana del 1 al 7... "));

if  (d == 1) {
    alert("Hoy es lunes");
} else if (d == 2) {
    alert("Hoy es martes");
} else if (d == 3) {
    alert("Hoy es miercoles");
} else if (d == 4) {
    alert("Hoy es jueves");
} else if (d == 5) {
    alert("Hoy es viernes");
} else if (d == 6) {
    alert("Hoy es sabado");
} else if (d == 7) {
    alert("Hoy es domingo");
} 

//9-calcular pago de grupo 
alert("Vamos a relizar el Ejercicio N° 9");

let cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de personas"));
descuentoGrupal1 = 1.5;
descuentoGrupal2 = 0.5;

if (cantidadDePersonas <= 7) {
    alert("el monto total a pagar es " + (descuentoGrupal1 * cantidadDePersonas));
} else if (cantidadDePersonas >= 8) {
    alert("el monto total a pagar es " + (descuentoGrupal2 * cantidadDePersonas));
} 

//10-Descuento en farmacia 
alert("Vamos a relizar el Ejercicio N° 10");

let recibo = prompt("ingrese el monto de su factura ");
descuento = (recibo * 0.15);
seAplicaDescuento = 100;

if  (recibo > seAplicaDescuento) {
    alert("Se aplico 15% de descuento su total es " + (recibo - descuento));
} else {
    alert("Su compra no tiene descuento su total es " + recibo);
} 