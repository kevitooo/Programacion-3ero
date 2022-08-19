var date = new Date();

var time = date.getTime();

var name = prompt("Introduce el primer nombre:");
var name2 = prompt("Introduce el segundo nombre:");
var surn = prompt("Introduce el apellido:");

var date2 = new Date();

var time2 = date2.getTime();

var total = (time2 - time) / 1000;

total = total.toFixed(1);

document.write("En introducir " + name + " " + name2 + " " + surn + " has tardado " + total + " segundos.");