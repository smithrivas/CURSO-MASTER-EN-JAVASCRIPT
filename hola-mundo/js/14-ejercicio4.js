'use strict'

// Numeros impares entre 2 números

alert("Aplicación para mostrar número impares entre 2 números ingresados por teclado");
var num1 = parseInt(prompt("Ingresa el primer número",0));
var num2 = parseInt(prompt("Ingresa el primer número",0));

while (num1<=num2) {
  if ( num1%2 != 0) {
    console.log(num1);
  }
  num1++;
}
