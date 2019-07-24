'use strict'

// Bucle While

var year = 2018;

while (year != 1991) {
  console.log("Año "+year);
  if (year == 2003) {
    break;
  }
  year--;
}

//Do while
var years = 20;

do{
  console.log(years);
  years++;
}while(years <= 25)
