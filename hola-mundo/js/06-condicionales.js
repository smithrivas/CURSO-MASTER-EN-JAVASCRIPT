'use strict'

/*
OPERADORES
<
>
<=
>=
==
!=
*/

var edad = 25;
var nombre = "Brayan";

if (edad>=18) {
  console.log(nombre+" tiene "+edad+" años, es mayor de edad.");
  if (edad<=30) {
    console.log("Todavía eres millenial.");
  }else if (edad>=70) {
    console.log("Eres anciano.");
  } else {
    console.log("Ya no eres millenial.");
  }
}else{
  console.log(nombre+" tiene "+edad+" años, es menor de edad.");
}

/*
OPERADORES LOGICOS
AND = &&
OR = ||
NEGACION = !
*/

var year = 2018;

// NEGACIÓN
if (year != 2016) {
  console.log("El años no es 2016, en realidad es "+year);
}

//AND
if (year >= 2000 && year <= 2020) {
  console.log("Estamos en la era actual.");
}else {
  console.log("Estamos en la era postmoderna.");
}

//OR
if (year == 2008 || year == 2018) {
  console.log("El año acaba en 8.");
}
