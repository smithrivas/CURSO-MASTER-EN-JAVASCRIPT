'use strict';

var array1 = ["Uno","Dos","Tres", "Cinco"];
var array2 = new Array("A","B","C");
var array3 = [10, 20, 30, 50, 80];

console.log(array1);
console.log(array2);

document.write("Elementos del array");
document.write("<ul>");
/*
for (var i = 0; i < array1.length; i++) {
  document.write("<li>"+array1[i]+"</li>");
}
*/

array1.forEach((elemento, indice)=>{
  document.write("<li>"+indice+" - "+elemento+"</li>");
});

document.write("</ul>");

for(let array in array1){
    document.write("<li>"+array1[array]+"</li>");
}

// Busquedas
/*
var busqueda = array1.find(function(elemento){
  return elemento == "Uno";
});
*/
var busqueda = array1.find(elemento => elemento == "Tres");
var busquedaIndice = array1.findIndex(elemento => elemento == "Tres");
var busquedaNumeros = array3.some(elemento => elemento > 70);

console.log(busqueda);
console.log(busquedaIndice);
console.log(busquedaNumeros);
