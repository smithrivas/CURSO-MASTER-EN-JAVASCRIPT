'use strict'
/*
  LET Y VAR
var nombre_var = valor; -> Definir variable con alcance global
let nombre_var = valor; -> Definir variable con alcance solo en el bloque donde se defina
*/

// Prueba con var
var numero = 40;
console.log(numero); // Valor 40

if (true) {
  var numero = 50;
  console.log(numero); // Valor 50
}

console.log(numero); // Valor 50

// Prueba con let
var texto = "Curso JS";
console.log(texto); // Valor JS

if (true) {
  let texto = "Curso laravel";
  console.log(texto); // Valor laravel
}

console.log(texto); // Valor JS
