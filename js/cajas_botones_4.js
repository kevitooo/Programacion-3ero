let box = document.createElement("input")
box.type = "text"
box.placeholder = "Ingrese un color"

document.body.appendChild(box)

let boton = document.createElement("input")
boton.type = "button"
boton.value = "Color fondo página"
boton.onclick = function () { document.bgColor = box.value }

document.body.appendChild(boton)