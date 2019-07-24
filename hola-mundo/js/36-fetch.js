'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

getUsuarios()
  // (promesa)Capturar los datos y convertirlo a JSON o un objeto de JS
  /*
  .then(function(data){
    return data.json();
  })
  */
  // Pasar los datos a un array
  .then(data => data.json())
  .then(users => {
    listadoUsuarios(users.data);
    //Encadenamiento de promesas
    return getInfo();
  })
  .then(data => {
    div_profesor.innerHTML = data;
    return getJanet();
  })
  .then(data => data.json())
  .then(user => {
  mostrarJanet(user.data);
  })
  .catch(error => {
    console.log(error+"****");
    //alert("Error en las peticiones");
  });

function getUsuarios(){
  //fetch("https://jsonplaceholder.typicode.com/users")
  return fetch("https://reqres.in/api/users");
}

function getJanet(){
  return fetch("https://reqres.in/api/users/2");
}

function getInfo(){
  // Se crea el objeto JSON
  var profesor = {
    nombre: "Brayan Smith",
    apellidos: "Rivas Bustos",
    url: "https://www.youtube.com"
  };

// Se crea la promesa
return new Promise((resolve, reject) => {
  var profesor_string = '';
  setTimeout(function(){
    // Se convierte objeto JSON a string
    profesor_string = JSON.stringify(profesor);
    // Comparativa para determinar si fue correcto el proceso, si es incorrecto genera error(reject)
    if (typeof profesor_string != "string" || profesor_string == '') return reject("Error");
    return resolve(profesor_string);
  }, 3000);
});

}

function listadoUsuarios(usuarios){
  // map: funciona casi igual que foreach, se asigna un nombre a la variable que recogera los datos y el indice
  usuarios.map((user, i) => {
    // Se crea elemento h3
    let nombre = document.createElement("h3");
    // Se insertan datos en el elemento
    nombre.innerHTML = i+". "+user.first_name+" "+user.last_name;
    // Se inserta el elemento con los datos en el DIV creado previamente
    div_usuarios.appendChild(nombre);

    // Mostrar texto "cargando" hasta que se carguen los datos
    document.querySelector(".loading").style.display= "none";
  });
}

function mostrarJanet(usuario){
    // Se crea elemento h4
    let nombre = document.createElement("h4");
    // Se crea el elemento imagen
    let avatar = document.createElement("img");
    // Se insertan datos en el elemento
    nombre.innerHTML = usuario.first_name+" "+usuario.last_name;
    // Se le indica la ruta de la imagen
    avatar.src = usuario.avatar;
    avatar.width = "100";
    // Se inserta el elemento con los datos en el DIV creado previamente
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    // Mostrar texto "cargando" hasta que se carguen los datos
    document.querySelector("#janet .loading").style.display= "none";
}
