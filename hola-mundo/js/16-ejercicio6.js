'use strict'

//Evaluar si un número es par o impar
var num = parseInt(prompt("Ingresa un número",0));

while (isNaN(num) || num==0) {
    num = parseInt(prompt("Ingresa un número",0));
}

if (num%2 == 0) {
  alert("Numero par");
}else {
  alert("Numero impar");
}
