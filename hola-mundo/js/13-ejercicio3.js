'use strict'

var num1 = parseInt(prompt("Ingresa el primer número",0));
var num2 = parseInt(prompt("Ingresa el segundo número",0));

/*
if (num1>num2) {
    while (num2<=num1) {
      console.log(num2);
      num2++;
    }

  }else if (num2>num1) {
    while (num1<=num2) {
      console.log(num1);
      num1++;
  }
}else {
  alert("Los números son iguales");
}
*/
document.write("<h2>Los números entre "+num1+" y "+num2+" son:</h2>")
for (var i = num1; i <= num2; i++) {
  document.write(i+"<br/>");
}
