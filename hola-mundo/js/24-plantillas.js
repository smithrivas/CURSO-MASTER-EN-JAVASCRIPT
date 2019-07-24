'use strict'

// Plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

var texto = `
  <h1>Hola que tal</h1>
  <h2>Mi nombre es: ${nombre}</h2>
  <h2>Mis apellidos son: ${apellidos}</h2>
`;

document.write(texto);
