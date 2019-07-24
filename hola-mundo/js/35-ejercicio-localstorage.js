'use strict'

// ***AÑADIR PELICULAS***
// Seleccionar formulario
var formulario = document.querySelector("#formpeliculas");

// Capturar evento submit
formulario.addEventListener("submit", function(){
  // Capturar valor del input
  var titulo = document.querySelector("#addpelicula").value;
  // Validar que no esté vacio
  if (titulo.length>=1) {
    // Agregar al localstorage
    localStorage.setItem(titulo, titulo);
  }
});

// ***MOSTRAR PELICULAS***
var ul = document.querySelector("#peliculas-list");
for( var i in localStorage){
  if (typeof localStorage[i] == "string") {
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);
  }
}

// ***BORRAR PELICULAS***
var formulario = document.querySelector("#formBorrarPeliculas");

formulario.addEventListener("submit", function(){
  var titulo = document.querySelector("#borrarPelicula").value;
  if (titulo.length>=1) {
    localStorage.removeItem(titulo);
  }
});
