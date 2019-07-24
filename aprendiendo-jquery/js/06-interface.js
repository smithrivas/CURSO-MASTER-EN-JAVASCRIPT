$(document).ready(function(){
  // Mover elemento por la página
  $('.elemento').draggable();

  // Redimensionar elemento
  $('.elemento').resizable();

  // Seleccionar elementos
  //$('.lista-seleccionable').selectable();

  // Organizar elementos
  $('.lista-seleccionable').sortable({
    update: function(event, ui){
      console.log('Se ha cambiado la lista.');
    }
  });

  // Drop
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function(){
      console.log('Has soltado algo dentro del área.');
    }
  });

  // Efectos
  $('#mostrar').click(function(){
    //$('.caja-efectos').toggle('fade');
    //$('.caja-efectos').toggle('explode');
    //$('.caja-efectos').toggle('blind');
    //$('.caja-efectos').toggle('drop');
    //$('.caja-efectos').toggle('fold');
    //$('.caja-efectos').toggle('puff');
    //$('.caja-efectos').toggle('scale');
    //$('.caja-efectos').toggle('shake');
    $('.caja-efectos').toggle('shake', 4000);
  });

  // Tooltip
  $(document).tooltip();

  $('#lanzar-popup').click(function(){
    $('#popup').dialog();
  });

  // Calendario - datepicker
  $('#calendario').datepicker();

  // Tabs
  $('#pestanas').tabs();
});
