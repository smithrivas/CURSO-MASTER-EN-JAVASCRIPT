'use strict'

function sumar(num1, num2, sumaYMuestra, sumaPorDos){
  var suma=num1+num2;
  sumaYMuestra(suma);
  sumaPorDos(suma);

  return
}

sumar(5,4,
function(dato){
  console.log("La suma es: "+dato);
},
dato => {
  console.log( "La suma multiplicado por 2 es: "+(dato*2));
});
