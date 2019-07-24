$(document).ready(function(){

  reloadLinks();

  $('#add_button').removeAttr('disabled')
    .click(function(){
    $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
    $('#add_link').val('');
    // html = ingresa el valor sobre todo lo demás
    // append = ingresa el valor al final de los demas valores
    // preppend = ingrea el valor antes de todos los valores
    // before = añade el valor antes de la lista, por fuera
    // after = añade el valor después de la lista, por fuera
    reloadLinks();
  });

  function reloadLinks(){
    // each en un arreglo recopila lo que hay en las etiquetas "a"
    $('a').each(function(index){
      var that = $(this);
      var enlace = that.attr("href");

      that.text(enlace); // Insertar contenido de "enlace" en etiquetas "a"
    });
  }
});
