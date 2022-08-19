let box = document.createElement("input")
box.type = "text"

document.body.appendChild(box)

let boton = document.createElement("input")
boton.type = "button"
boton.value = "Click aquí"
boton.onclick = function() { alert(box.value)}

document.body.appendChild(boton)