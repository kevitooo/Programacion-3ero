const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

//info.textContent = 'Debajo hay una lista dinamica. Clickea en cualquier lugar de la pagina para agregar un item en la lista. Clickea en un item de la lista existente para cambiar el texto y agregar algo mas.';

document.body.appendChild(info);
document.body.appendChild(list);

info.onclick = function {
	const listItem = document.createElement('li');
	const listContent = prompt('Que contenido queres tener en la lista de items?');
	listItem.textContent = listContent;
	list.appendChild(listItem);

	listItem.onclick = function(e) {
		e.stopPropagation();
		const listContent = prompt('Ingresar un contenido nuevo para tu lista de items');
		this.textContent = listContent;
	}
}