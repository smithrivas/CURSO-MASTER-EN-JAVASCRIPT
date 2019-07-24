$(document).ready(function(){

  // LOAD
  //$('#datos').load('https://reqres.in');

  // *** get y post ****
  // Pagina del API, nombre del parametro GET, funcion para recoger los datos
  $.get("https://reqres.in/api/users",{page: 3}, function(response){
    // array/nombre que contiene los datos | elemento-indice
    response.data.forEach((element, index) => {
      $('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>')
    });
  });

  $("#formulario").submit(function(e){
    // No redirigir
    e.preventDefault();

    // JSON
    var usuario = {
      // Se captura el dato del campo input requerido y su valor
      name: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    }

    /*
    // Dirección del API / JSON con usuario que se va a crear / funcion
    $.post($(this).attr("action"), usuario, function(response){
      console.log(response);
    }).done(function(){
      alert('Usuario añadido correctamente');
    });
    */
    $.ajax({
      // Tipo de envío
      type: 'POST',
      // URL del action
      url: $(this).attr('action'),
      // Lo que se enviará | objeto JSON
      data: usuario,
      // Acción a realizar antes de enviar
      beforeSend: function(){
        console.log('Enviando usuario...');
      },
      // Cuando sea exitosa la petición
      success: function(response){
        console.log(response);
      },
      error: function(){
        console.log('A ocurrido un error!!');
      },
      timeout: 2000
    });

  });

});
