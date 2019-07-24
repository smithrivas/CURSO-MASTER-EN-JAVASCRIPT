
var fecha = new Date(); // Fecha con hora y zona horaria
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hour = fecha.getHours();

var textoHora = `
  El año es: ${year}
  El mes es: ${month}
  El día es: ${day}
  La hora es: ${hour}
`;

console.log(textoHora);
console.log(Math.ceil(Math.random()*100));
