let box = document.createElement("input")
box.type = "text"
box.placeholder = "Ingrese nuevo valor"

document.body.appendChild(box)

let boton = document.createElement("input")
boton.type = "button"
boton.value = "Obtener el tipo de valor"
boton.onclick = function() {
    if(box.value == ""){
        alert("Caja vacía")
    }
    else {
        if(!isNaN(box.value)){
            alert("Valor numerico")
        }
        else {
            alert("Valor string")
        }
    }
}
document.body.appendChild(boton)