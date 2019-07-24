'use strict'

// EVENTO: Funcion que se ejecuta cuando sucede algo.
// EVENTOS MOUSE

// LOAD = Carga todos los eventos del script antes de cargar el HTML
window.addEventListener("load", () => {

  function cambiarColor(){
    var bg = boton.style.background;
    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    return true;
  }

  var boton = document.querySelector("#boton");
  // CLICK
  boton.addEventListener("click", function(){
    cambiarColor();
    // This hace referencia al mismo objeto donde se está instanciando
    this.style.border = "10px solid black";
  });

  // MOUSE OVER - Pasar el cursor
  boton.addEventListener("mouseover", function(){
    boton.style.background = "yellow";
  });

  // MOUSE OUT - Sacar el cursor
  boton.addEventListener("mouseout", function(){
    boton.style.background = "#ccc";
  });

  var input = document.querySelector("#campo_nombre");

  // FOCUS - Clickear el input
  input.addEventListener("focus",function(){
    console.log("|FOCUS| Estás dentro del input.");
  });

  // BLUR - Salir del input
  input.addEventListener("blur",function(){
    console.log("|BLUR| Estás fuera del input.");
  });

  // KEYDOWN - Pulsar tecla
  input.addEventListener("keydown",function(event){
    console.log("|KEYDOWN| Pulsando la tecla", String.fromCharCode(event.keyCode));
  });

  // KEYPRESS - Tecla presionada
  input.addEventListener("keypress",function(event){
    console.log("|KEYPRESS| Tecla presionada", String.fromCharCode(event.keyCode));
  });

  // KEYUP - Tecla soltada
  input.addEventListener("keyup",function(event){
    console.log("|KEYUP| Tecla soltada", String.fromCharCode(event.keyCode));
  });
  /*
  boton.addEventListener("click", function(){
    var bg = boton.style.background;
    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    return true;
  });
  */
}); // END LOAD
