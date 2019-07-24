'use strict'

// LOCAL STORAGE | Memoria local que funciona como una session.

// Comprobar disponibilidad del localstorage
if (typeof(Storage) !== 'undefined') {
  console.log("localstorage Disponible.");
}else {
  console.log("Incompatible con localstorage.");
}

// GUARDAR DATOS
localStorage.setItem("Titulo","Curso JS Udemy");

// RECUPERAR ELEMENTO
document.querySelector("#caja_peliculas").innerHTML = localStorage.getItem("Titulo");

// GUARDAR OBJETOS
var usuario = {
  nombre: "Brayan",
  email: "smith@rivas.com",
  web: "www.brayan.com"
};

// Se debe convertir el objeto a un JSON string para que el localStorage lo pueda reconocer.
localStorage.setItem("usuario", JSON.stringify(usuario));

// RECUPERAR OBJETO
// Con JSON.parse se convierte el JSON string a un objeto utilizable en JS
var userjs = JSON.parse(localStorage.getItem("usuario"));

document.querySelector("#caja_user").append(userjs.nombre+" - "+userjs.web);
//document.querySelector("#caja_user").innerHTML = userjs.nombre+" - "+userjs.web;

// ELIMINAR ITEM DEL LOCALSTORAGE
localStorage.removeItem("usuario");

// LIMPIAR TODO EL LOCALSTORAGE
localStorage.clear();
