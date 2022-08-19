console.log("codigo.js");
var tabla = document.getElementById("usuarios");
var botonEnviar = document.getElementById("enviar");

function CargaTabla(event){
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;

    var fila = document.createElement("tr");
    var celdaNombre = document.createElement("td");
    celdaNombre.innerHTML = nombre.toUpperCase();
    var celdaApellido = document.createElement("td");
    celdaApellido.innerHTML = apellido.toUpperCase();
    var celdaEdad = document.createElement("td");
    celdaEdad.innerHTML = edad;

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaEdad);

    tabla.appendChild(fila);
}

botonEnviar.onclick = CargaTabla;