'use strict'
// VARIABLES
// Contenedor de información
// 'use strict' -> activar modo estricto para evitar malas practicas de programación como lo puede ser asignar valor a variables sin declarar.

var pais = "Colombia";
var continente = "Suramérica";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;

pais = "España";
continente = "Europa";

console.log(pais, continente, antiguedad);
alert(pais_y_continente);
