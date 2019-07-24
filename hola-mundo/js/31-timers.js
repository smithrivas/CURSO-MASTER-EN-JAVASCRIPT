'use strict'

window.addEventListener('load', ()=>{

  // TIMERS
  function intervalo(){
    //var tiempo = setTimeout(function(){ | Solo se ejecuta una vez
    var tiempo = setInterval(function(){
      console.log("Set interval ejecutado");
      var encabezado = document.querySelector("h1");
      if (encabezado.style.fontSize == "50px") {
        document.querySelector("h1").style.fontSize = "40px";
      } else {
        document.querySelector("h1").style.fontSize = "50px";
      }
    }, 500); // Milisegundos

    return tiempo;
  }

  var tiempo = intervalo();

  // DETENER TIMER
  var stop = document.querySelector("#stop");
  stop.addEventListener('click', function(){
    alert("Has parado el intervalo en bucle");
    clearInterval(tiempo);
  });

  // INICIAR TIMER
  var start = document.querySelector("#start");
  start.addEventListener('click', function(){
    alert("Has iniciado el intervalo en bucle");
    intervalo();
  });

});
