
// ejercicios 3-A
alert("RESOLVEMOS 3 FIGURAS GEOMETRICAS");

//calcular triangulo
alert("CALCULAMOS UN TRIANGULO");
var base = prompt("Primer dato del triangulo");
var altura = prompt ("Segundo dato del triangulo");
var resultado = (base*altura) /2;
alert("La Superficie del Triangulo es " + resultado);


//calcular rectangulo
alert("CALCULAMOS UN RECTANGULO");
var ladoA =prompt("Primer dato del rectangulo");
var ladoB = prompt ("Segundo dato del rectangulo");
var resultado = (ladoA*ladoB);
alert("La superficie del rectangulo es " + resultado);


//calcular circulo
alert("CALCULAMOS EL RADIO DE UN CIRCULO");
var pi=3.14159265359;
var a;
var r =prompt("ingrese el radio ");
a=pi*(r*r);3
alert("el area es "+a);

//3-B crear 3 variables
alert("RESOLVEMOS 3 CALCULOS MULTIPLICACION, SUMA Y DIVISION, INGRESANDO 3 VALORES");
var a;
var b;
var c;

a = parseInt(prompt("Ingrese el primer valor "));
b = parseInt(prompt("Ingrese el segundo valor "));
c = parseInt(prompt("Ingrese el tercer valor "));

var producto = a*b*c;
var suma = a+b+c;
var promedio = (a+b+c)/3;

alert("El producto de los valores es " + producto);
alert("La suma de los valores es " + suma);
alert("El promedio de los valores es " + promedio);

// 3-C crear una tienda
alert("SABREMOS CUANTO ES NUESTRA COMPRA CON 15% DE DESCUENTO")
var olla = 500;
var cuchillo = 200;
var cuchara = 100;
var  papel = 100;
var plato = 100;

var sinDescuento = olla+cuchillo+cuchara+papel+plato;
var conDescuento = (olla+cuchillo+cuchara+papel+plato)*0.15;

alert("Con descuento de 15% se ahorra " + conDescuento);
alert("Sin descuento tiene que pagar " + sinDescuento);

// conversion de dolares 
alert("CONVERTINOS PESOS A DOLARES ")
var pesos = (prompt("Ingrese cantidad de pesos "));
var dolar = (prompt("Ingrese el valor del dolar "));
var valorFinal = pesos / dolar;
alert("Esta es la cantidad de dolares que compraste " + valorFinal);


//calcular el iva de una compra 
alert("CALCULAMOS EL IVA DE NUESTRA COMPRA")
var montoTotal = (prompt("Ingrese el monto de su factura "));
var iva = 21;
var calcularIva = ((montoTotal * iva) /100);
var sinIva =  montoTotal - calcularIva;
alert("Este es su monto sin IVA " + sinIva );
