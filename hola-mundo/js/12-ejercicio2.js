'use strict'

var suma = 0;
var contador = 0;

do {
  var numero = parseInt(prompt("Ingresa un número mayor a 0",0));
  if (isNaN(numero)) {
    numero = 0;
  }else if (numero>=0) {
    suma = suma+numero;
    contador++;
    console.log(suma);
    console.log(contador);
  }
} while (numero>=0);

alert("La suma de todos los número es: "+suma);
alert("La media de los números ingresados es: "+(suma/contador));
