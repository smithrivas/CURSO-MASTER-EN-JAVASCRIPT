'use strict';

function mostrarArray(elementos, textoCustom=""){
  document.write("<h1>Contenido del array "+textoCustom+"</h1>");
  document.write("<ul>");
  elementos.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
  });
  document.write("</ul>");
}

// ********************* PUNTO 1 *********************
// 1- Pedir 6 números por pantalla y guardarlos en un array.
// Se puede hacer de las 2 formas pero es más racomendable utilizar el push();

//var numeros = new Array(6);
var numeros = [];

for (var i = 0; i <= 5; i++) {
  //numeros[i] = parseInt(prompt("Introduce 1 número", 0));
  numeros.push(parseInt(prompt("Introduce 1 número", 0)));
}

// ********************* PUNTO 2 *********************
// 2- Mostrar el array entero en el cuerpo de la página y la consolo

// Mostrar el array en la consola
console.log(numeros);

// Mostrar el array en el cuerpo de la página
mostrarArray(numeros);

// ********************* PUNTO 3 *********************
// 3- Ordenar y mostrar
// Ordenar
numeros.sort(function(a,b){return a-b});

// Mostrar
mostrarArray(numeros, "ordenado.")

// ********************* PUNTO 4 *********************
// 4- Invertir su orden y mostrarlo
// Ordenar
numeros.reverse();

// Mostrar
mostrarArray(numeros, "invertido.")

// ********************* PUNTO 5 *********************
// 5- Cuantos elementos tiene el array
document.write("<h1>El array tiene "+numeros.length+" elementos.</h1>");

// ********************* PUNTO 6 *********************
// 6- Busqueda y mostrar si se encuntra y el indice

// Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));

// Indice
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
  document.write("</hr><h1>ENCONTRADO</h1>");
  document.write("<h1>posicion de la busqueda: "+posicion+"</h1>");
} else {
  document.write("<h1>NO ENCONTRADO</h1>");
}
