$(document).ready(function(){
  // $()= selector
  // .css("clave","atributo")

  // *** SELECTOR DE ID ***
  $("#rojo").css("background","red")
            .css("color","white");
  $("#amarillo").css("background","yellow")
                .css("color","black");
  $("#verde").css("background","green")
             .css("color","white");

  // *** SELECTOR DE CLASE ***
  $(".zebra").css("padding","5px");
  $(".sin_borde").click(function(){
    $(this).addClass("zebra");
  });

  // *** SELECTOR DE ETIQUETA ***
  // hasClass() = validar si existe esa clase
  // addClass() = Agregar clase
  // removeClass() = Remover clase
  var parrafos = $('p');
  parrafos.click(function(){
    var that = $(this);

    if (!that.hasClass('grande')) {
      that.addClass('grande');
    } else {
      that.removeClass('grande');
    }
  });

  // *** SELECTOR DE ATRIBUTO ***
  $('[title=facebook]').css("background","blue").css("color","white");
  $('[title=youtube]').css("background","red").css("color","white");

  // *** OTROS ***
  //$('p, a').addClass('margen-superior');

});
