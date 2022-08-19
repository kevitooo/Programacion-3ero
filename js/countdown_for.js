let imagen

for(let i = 5; i >= 0; i--){
    imagen = document.createElement("img")

    if(i != 0){
        imagen.src = "imgs/" + i + ".jpg"
    }
    else {
        imagen.src = "imgs/blanca.jpg"
    }
    document.body.appendChild(imagen)
}