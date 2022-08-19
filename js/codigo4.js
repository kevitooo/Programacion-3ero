console.log('scripts')
var nombre = prompt('¿Cuál es tú nombre?');
var categoria = '4F';
var edad = 25;
var resultado = 0;
var tope = 100;
var n = 0;

//Estructura condicional simple o de decisión simple
if (nombre == 'Ana') {
	console.log('Tu nombre es Ana')
}
else {
	console.log('Tu nombre no es Ana, pero también eres bienvenido')
}

if (nombre == 'Ana' && categoria != '4F') {
	alert('Bienvenida Ana');
}
else {
	alert('No eres la persona esperada.');
}

if (categoria == '4F' || nombre == 'Ana') {
	console.log('Tú eres Ana o eres categoria 4F');
}
else if (edad >= 25) {
	console.log('Acceso permitido.');
}
else {
	console.log('Acceso denegado.');
}

//Estructura condicional múltiple
switch (categoria) {
	case '2R': console.log('categoria 2R');
	break;
	case '4F': console.log('categoria 4F');
	break;
	default: console.log('categoria por defecto');
	break;
}

//Estructuras de repetición o iteración
while (n <= tope) {
	resultado += n; // resultado = resultado + n
	console.log('El valor de resultado es: ' + resultado);
	n++;
}

do {
	document.write('Ejecutó al menos una vez');
	n++;
} while(n <= tope);

if (confirm('Queres continuar?')) {
	//window.location = 'http://www.isp23.edu.ar';
	window.location = 'http://www.isp23-sfe.infd.edu.ar';
}