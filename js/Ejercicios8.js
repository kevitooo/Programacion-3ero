console.log('Ejercicios8.js');

function alerta(event){
    var color = event.target.innerHTML;
    var saludo = document.getElementById('caja');
    saludo.style.backgroundColor = color;
    saludo.innerHTML = 'Hola ' + event.target.innerHTML;
}

var botones = document.querySelectorAll('button');
console.log(botones);
for (var j = 0; j < botones.length; j++){
    botones[j].onclick = alerta;
}