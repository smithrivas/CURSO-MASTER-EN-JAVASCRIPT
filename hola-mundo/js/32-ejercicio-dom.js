'use strict'

window.addEventListener('load', function(){
  //console.log("Doom cargado!!");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  // Se oculta la caja donde se mostrará Información
  box_dashed.style.display = "none";

  // Evento submit
  formulario.addEventListener('submit', function(){
    console.log("Evento Submit Capturado");
    // Se capturan los datos
    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    // *****VALIDACION*****
    // trim() = Validar que el campo no esté vacio
    // length = Validar que el campo tenga más de 1 caractér
    // !isNaN = Que sea un número
    if (nombre.trim()==null || nombre.trim().length==0 || !isNaN(nombre)) {
      // Mensaje de error que se mostrará en el input
      document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
      return false;
    }else {
      // Ocultar Mensaje de error
      document.querySelector("#error_nombre").style.display = "none";
    }

    if (apellidos.trim()==null || apellidos.trim().length==0 || !isNaN(apellidos)) {
      alert("El apellido no es valido");
      return false;
    }

    if (edad==null || edad<=0 || isNaN(edad)) {
      alert("La edad no es valida");
      return false;
    }

    // Se muestra caja de Información
    box_dashed.style.display = "block";

    // Se seleccionan campos de los datos que se mostrarán
    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    // Se insertan datos a mostrar
    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;
    /*
    //console.log(nombre, apellidos, edad);
    var parrafo = document.createElement("p");
    parrafo.append(nombre);
    parrafo.append(apellidos);
    parrafo.append(edad);
    box_dashed.append(parrafo);
    */
  });
});
