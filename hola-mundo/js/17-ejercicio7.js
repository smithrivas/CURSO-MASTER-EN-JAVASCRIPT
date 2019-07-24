'use strict'

// Tabla de multiplicar de un número ingresado por pantalla

var num = parseInt(prompt("Ingrese el número para ver su tabla de multiplicar",0));

while (isNaN(num) || num==0) {
    num = parseInt(prompt("Ingrese el número para ver su tabla de multiplicar",0));
}



// Todas las tablas de multiplicar

for (var i = 1; i <= 10; i++) {
  document.write("<h2>Tabla del número "+i+"</h2>");
  for (var todas = 1; todas <= 10; todas++) {
    document.write(i+"x"+todas+"="+(i*todas)+"<br/>");
  }
}
