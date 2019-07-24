'use strict'

// Programa que pida 2 números e informe cual es el mayor, el menor y si son iguales.
// Si no es número o es menor a 0 entonces volver a pedir.

var numero1 = parseInt(prompt("Ingresa un número",0));
var numero2 = parseInt(prompt("Ingresa otro número",0));

while (numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Ingresa un número",0));
  numero2 = parseInt(prompt("Ingresa otro número",0));
}

if (numero1>numero2) {
  alert("El número mayor es "+numero1);
  alert("El número menor es "+numero2);
}else if (numero1==numero2) {
  alert("Los números son iguales");
}else if (numero1<numero2){
  alert("El número mayor es "+numero2);
  alert("El número menor es "+numero1);
}else {
  alert("Ingresa números correctos!!")
}

console.log(numero1,numero2);
