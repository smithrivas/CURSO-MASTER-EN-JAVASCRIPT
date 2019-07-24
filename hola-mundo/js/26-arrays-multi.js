'use strict';

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La vida es bella", "Interestelar", "Terminator"];

var cine = [categorias, peliculas];

console.log(peliculas.sort());
console.log(peliculas.reverse());

//console.log(cine[1][1]);
/*
var elemento = "";

do {
  elemento = prompt("Introduce tu pelicula");
  peliculas.push(elemento);
} while (elemento!="ACABAR");
peliculas.pop();
*/
var indice = peliculas.indexOf("Interestelar");

if (indice > -1) {
  peliculas.splice(indice, 1);
}

var texto = peliculas.join();

//console.log(texto);

var cadena = "Texto1, Texto2, Texto3";
var stringCadena = cadena.split(", ");

console.log(stringCadena);
