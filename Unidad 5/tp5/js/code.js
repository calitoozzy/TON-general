//1 Trabajo

confirm("Ejercicio 1, Ingrese usuario y contraseña...");

let email;
let password;
let emailConfirm;
let passswordConfirm;

email = prompt("ingresar su correo electronico");
password = prompt("ingresar contraseña");
emailConfirm = prompt("confirme correo");
passswordConfirm = prompt("confirme contraseña");

if (email === emailConfirm && password === passswordConfirm) {
  alert("Sus datos ingresados son válidos.");
} else {
  alert("Intentelo nuevamente, Por favor.....");
}

// 2 trabajo
confirm("Ejercicio 2, Ingrese edad y color de remera...");

let años = parseInt(prompt("ingrese su edad"));
let mayorDeEdad = 17;

remeraRoja = confirm("¿tu remera es roja?");

if (años >= mayorDeEdad && remeraRoja === true) {
  alert("Puede ingresar");
} else {
  alert("No podes ingresar");
}

//3 trabajo
confirm("Ejercicio 3, Ingrese 2 Calificaciones...");

let nota1 = parseFloat(prompt("Ingrese nota 1 "));
let nota2 = parseFloat(prompt("Ingrese nota 2 "));

let promedio = (nota1 + nota2) / 2;
alert("el promedio es " + promedio);

if (nota1 > 7 && nota2 > 7 && promedio > 7) {
  alert("Materia aprobada por tener las dos notas mayores a 7");
} else {
  alert("Materia no aprobada por no tener las dos notas mayores a 7");
}
