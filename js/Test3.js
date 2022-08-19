const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Ingresa un nombre');
  para.textContent = `Nombre: ${name}`;
}