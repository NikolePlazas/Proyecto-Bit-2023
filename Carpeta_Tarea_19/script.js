// Ejercicio 1:
//Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius
// y el programa muestre en una alert la temperatura en grados Fahrenheit.

var celsius = prompt("Ingresa la temperatura en grados Celsius:");
var fahrenheit = (celsius * 9 / 5) + 32;

alert("La temperatura en grados Fahrenheit es: " + fahrenheit);

//Segundo ejercicio.
//El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado.


let nu1 = parseInt(prompt("Ingresa un número:"));


for (let i = 1; i <= nu1; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}


for (let i = nu1 - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}


//tercer ejercicio 
//calcular su factorial

let num = parseInt(prompt("Ingresa un número:"));
let factorial = 1;

for (let i = num; i >= 1; i--) {
  factorial *= i;
}

console.log("El factorial de " + num + " es " + factorial);


// ejercicio #4
//cajero ATM



let saldo = 2000;
let ultimaAccion = '';

while (true) {

    let opcion = prompt("Bienvenido al Cajero ATM, Porfavor Ingrese la transaccion que desea realizar:\n1. Consultar saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Ver últimos movimientos\n5. Salir");

    if (opcion === "1") {

        alert("Su saldo actual es: $" + saldo);
        ultimaAccion = "Consultado saldo: $" + saldo;

    } else if (opcion === "2") {

        let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
        saldo += deposito;
        alert("Depósito de $" + deposito + " exitoso. Su saldo actual es: $" + saldo);
        ultimaAccion = "Depositado: $" + deposito;

    } else if (opcion === "3") {

        let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));

        if (retiro <= saldo) {

            saldo -= retiro;
            alert("Retiro de $" + retiro + " exitoso. Su saldo actual es: $" + saldo);
            ultimaAccion = "Extraído: $" + retiro;

        } else {

            alert("No tiene suficiente saldo para realizar el retiro");
            ultimaAccion = '';
        }
    } else if (opcion === "4") {

        alert(ultimaAccion ? "Última acción:\n" + ultimaAccion : "No se han realizado movimientos aún");

    } else if (opcion === "5") {

        alert("Muchas gracias por usar nuestro cajero automático. ¡Hasta luego!");
        break;

    } else {

        alert("Opción inválida, por favor ingrese una opción válida.");

    }
}


// ejercicio numero 5
//Fibonacci


let cantidad = parseInt(prompt("Porfavor ingresa la cantidad de veces que quieras ver en la secuencia de Fibonacci :"));
let a = 0, b = 1, nextTerm;

console.log("la secuencia de Fibonacci:");

for (let i = 1; i <= cantidad; i++) {

    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;

}

alert ("Realizado por: Nikole Gabriela Plazas")


