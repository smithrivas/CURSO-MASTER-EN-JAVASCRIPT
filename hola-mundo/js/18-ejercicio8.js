'use strict'

var num1 = parseInt(prompt("Ingrese el primer número para ver el resultado de las operaciones",0));
var num2 = parseInt(prompt("Ingrese el segundo número para ver el resultado de las operaciones",0));

while (isNaN(num1) || num1==0 || isNaN(num2) || num2==0) {
  num1 = parseInt(prompt("Ingrese el primer número de forma correcta para ver el resultado de las operaciones",0));
  num2 = parseInt(prompt("Ingrese el segundo número de forma correcta para ver el resultado de las operaciones",0));
}

var suma = num1+num2;
var resta = num1-num2;
var multi = num1*num2;
var divi= num1/num2;

document.write("El resultado de las operaciones es:<br/>");
document.write(num1+"+"+num2+"= "+suma+"<br/>");
document.write(num1+"-"+num2+"= "+resta+"<br/>");
document.write(num1+"*"+num2+"= "+multi+"<br/>");
document.write(num1+"/"+num2+"= "+divi+"<br/>");

var resultado = "La suma es "+(num1+num2)+"\n"+
                "La resta es "+(num1-num2)+"\n"+
                "La multiplicación es "+(num1/num2)+"\n"+
                "La divición es "+(num1*num2)+"\n";

alert(resultado);
