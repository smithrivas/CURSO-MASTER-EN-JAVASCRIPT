'use strict'

 function frutas(fruta1, fruta2, ...mas_frutas){
   console.log("Fruta 1= "+fruta1);
   console.log("Fruta 2= "+fruta2);
   console.log(mas_frutas);
 }

frutas("Uva", "Lulo", "Banano", "Manzana", "Piña");

var otrasfrutas = ["Pera", "Guayaba"];
frutas(...otrasfrutas, "Uva", "Lulo", "Banano", "Manzana", "Piña");
