let sueldo = 85000;

let opcion = Number(
  prompt(
    "Ingrese una de las Opciones a Realizar 1-Extraer 2-Transferir 3-Saldo 4-Ingresar Dinero"
  )
);

switch (opcion) {
  case 1:
    console.log("Ha ingresado la opcion de extraer");
    let extraerSaldo = Number(prompt("Cuanto necesita extraer"));
    sueldo = sueldo - extraerSaldo;
    alert("Usted se ha quedado con el siguiente saldo: " + sueldo);
    if (sueldo <= 0) {
      alert("Usted a excedido ");
    } else {
      alert("Todavia me queda saldo... :)");
    }
    break;
  case 2:
    console.log("Ha ingresado la opcion de tranferir");
    alert(
      "Usted a elegido Tansferir... vamos a necesitar unos datos... comencemos.."
    );
    numeroDeCuenta = Number(prompt("Ingrese el numero de cuenta"));
    monto = Number(promp("Ingrese el monto a Transferir"));
    nombre = prompt("Ingrese el Nombre de la persona a Transferir");
    monto = confirm("Confirma la transferencia a " + nombre + "De $ " + monto);
    sueldo = sueldo - monto;
    alert(
      "Su saldo es el siguiente: " + sueldo + "Usted realizo una tranferencia a" +
        nombre + " de $" + monto);
    if (sueldo <= 0) {
      alert("usted a excedido el saldo de su cuenta" + sueldo);
    }
    break;
  case 3:
    console.log("Cosnsultar saldo");
    document.write("Su saldo actual es: $ " + sueldo);
    break;
  case 4:
    console.log("Ingresar dinero");
    ingresarSaldo = Number(prompt("Escriba el monto que quiere depositar"));
    sueldo = ingresarSaldo + sueldo;
    document.write("El estado de su Cuenta es $ " + sueldo);
    break;
  default:
    console.log("Usted no ha elegido ninguna opcion");
    break;
}
