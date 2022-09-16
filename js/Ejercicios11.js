console.log('Ejercicios11.js');

$(document).ready(function(){
    var nombre = prompt('Ingrese su apellido y nombre:');
    var documento = prompt('Ingrese su documento:');
    var email = prompt('Ingrese su correo electrónico:');
    var parrafo = $('p')
    parrafo.html('Apellido y nombre: <b>' + nombre.toUpperCase() + '</b><br>Documento: <b>' + documento + '</b><br> email: <b>' + email + '</b>')
    parrafo.addClass('EstiloParrafo');
})

$('#boton').click(function(event){
    //$('.panel').toggle()
    //$('.panel').fadeToggle()
    $('$#contenedor').fadeToggle(2000)
})