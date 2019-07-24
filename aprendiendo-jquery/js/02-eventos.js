$(document).ready(function(){
  // *** mouseover mouseout ***
  var caja = $('#caja');
/*
  caja.mouseover(function(){
    $(this).css('background', 'red');
  });

  caja.mouseout(function(){
    $(this).css('background', 'darkred');
  });
*/
function rojo(){
  $(this).css('background', 'red');
}

function rojoOscuro(){
  $(this).css('background', 'darkred');
}

  // *** hover ***
  caja.hover(rojo, rojoOscuro);

  // *** click, doble click
  caja.click(function(){
    $(this).css('background', 'darkblue')
          .css('color','white');
  });

  caja.dblclick(function(){
    $(this).css('background', 'gray')
          .css('color','black');
  });

  // *** focus y blur ***
  var nombre = $('#nombre');
  var datos = $('#datos');

  nombre.focus(function(){
    $(this).css('border','2px solid green');
  });

  nombre.blur(function(){
    $(this).css('border','1px solid #ccc');
    datos.text($(this).val()).show(); // $(this).val() = Saca el valor del campo, text() = lo que mostrará, show() = mostrar
  });

  // *** mousedown y mouseup ***
  datos.mousedown(function(){
    datos.css('border-color','#ccc'); // Boton click presionado
  });

  datos.mouseup(function(){
    datos.css('border-color','black'); // Boton click cuando se levanta
  });

  // *** mouse move ***
  $(document).mousemove(function(){ // Seguir movimiento del mouse
    $('body').css('cursor','none'); // Ocultar cursos
    $('#sigueme').css('left', event.clientX)
                .css('top', event.clientY);
  });

});
