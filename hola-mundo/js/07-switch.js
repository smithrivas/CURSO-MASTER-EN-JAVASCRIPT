'use strict';

var edad = 123;
var imprime = "";

switch(edad){
  case 18:
    imprime = "Acabas de cumplir la mayoría de edad.";
    break;
  case 25:
    imprime = "Ya eres adulto.";
    break;
  case 40:
    imprime = "Crisis de los cuarenta.";
    break;
  case 75:
    imprime = "Ya eres un anciano.";
    break;
  default:
    imprime = "Tu edad es neutra.";
}

console.log(imprime);
