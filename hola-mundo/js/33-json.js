'use strict'

// JSON = javascript object notación *Array asociativo

// Objeto | luego del indice son ":" después el valor y se separan por ","  los elementos
var pelicula = {
  titulo: 'Batman vs Superman',
  year: 2017,
  pais: 'EE.UU'
};

var peliculas = [{titulo: 'El aro', year: 2009, pais: 'Japon'},
pelicula
];

// Se selecciona el DIV donde se mostrará
var caja_peliculas = document.querySelector("#caja_peliculas");
var indice;
for(indice in peliculas){
  // Se crea el parrafo
  var p = document.createElement("p");
  // Al parrafo se le agrega contenido del objeto
  p.append(peliculas[indice].titulo+" - "+peliculas[indice].year);
  // Al DIV selecciona del HTML se le inserta el parrafo con su contenido
  caja_peliculas.append(p);
}
