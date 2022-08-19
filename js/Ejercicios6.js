var boton = document.getElementsByTagName('button');

for(var i=0; i < 4; i++){
    boton[i].onclick = saludar;
}

function saludar(){
    alert('Hola');
}