$(document).ready(function(){
  var caja = $('#caja');
  $('#mostrar').hide();

  $('#mostrar').click(function(){
    $(this).hide();
    $('#ocultar').show();

    caja.fadeIn(); // Se le puede indicar velocidad(fast,normal,slow)
                        // fadeIn = Fundido
                        // fadeTo = opacidad, parametros'velocidad',valor entre 0 y 1
                        // slideDown = realiza el efecto desplegandose hacia abajo, se puede indicar velocidad
  });

  $('#ocultar').click(function(){
    $(this).hide();
    $('#mostrar').show();

    caja.fadeOut(); // Se le puede indicar velocidad(fast,normal,slow)
                          // fadeOut = Fundido
                          // fadeTo = opacidad, parametros'velocidad',valor entre 0 y 1
                          // slideUp = realiza el efecto desplegandose hacia abajo, se puede indicar velocidad
  });

  $('#todoenuno').click(function(){
    caja.toggle('fast'); // Efecto de abrir y cerrar con un solo boton, se puede indicar velocidad
                              // fadeToggle = realiza el efecto desvaneciendose
                              // slideToggle = realiza el efecto desplegandose hacia abajo
  });

  $('#animar').click(function(){
    caja.animate({
                  marginLeft:'500px',
                  fontSize: '40px',
                  height: '110px'
                  }, 'slow')
        .animate({
                  borderRadius: '900px',
                  marginTop: '80px'
                }, 'slow')
        .animate({
                  borderRadius: '0px',
                  marginLeft: '0px'
                }, 'slow')
        .animate({
                  borderRadius: '100px',
                  marginTop: '0px'
                }, 'slow')
        .animate({
                  marginLeft:'500px',
                  fontSize: '40px',
                  height: '110px'
                }, 'slow');
  });

});
