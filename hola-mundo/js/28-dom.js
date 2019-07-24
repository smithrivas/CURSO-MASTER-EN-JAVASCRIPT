'use strict'

// DOM - Document Object Model
function cambiaColor(color){
  caja.style.background = color;
}

// CONSEGUIR ELEMENTOS POR UN ID ESPECIFICO

//var caja = document.getElementById('micaja');
var caja = document.querySelector("#micaja"); // #id | .clase


caja.innerHTML = "TEXTO DESDE JS!"; // inserta texto en el código HTML desde JS
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";


// CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName("div");
/*
var contenidoEnTexto = todosLosDivs[2]; //textContent=Mostrar texto | innerHTML=Mostrar o editar nuevo texto.
contenidoEnTexto.innerHTML = "Otro texto para el segundo div";
contenidoEnTexto.style.background = "blue";
*/
//var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
for(let valor in todosLosDivs){
  if (typeof todosLosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto); // append = Añade después
    seccion.append(parrafo); // prepend = Añade antes
  }
}
seccion.append(hr);


// CONSEGUIR ELEMENTOS POR SU CLASE CSS
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";

for(let div in divsRojos){
    //console.log(divsRojos[div]);
    if (divsRojos[div].className == "rojo") {
      divsRojos[div].style.background = "red";
    }
}
//divsRojos[0].style.background = "red";

// QUERY SELECTOR
var id = document.querySelector("#encabezado");
console.log(id);

var clase = document.querySelector(".rojo");
console.log(clase);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

// querySelector es recomendable para seleccionar un solo elemento.
// getElementById, getElementsByClassName, getElementsByTagName es recomendable para traer varios elementos y guardarlos en un array.
