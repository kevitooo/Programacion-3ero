let watch = 0
let frecuency = 1000

function refresh(){
    let now = new Date()
    let date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear()
    let hour = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    let write = "Hoy es " + date + " y son las " + hour + " horas."
    let site = document.getElementById("capa0")
    site.innerHTML = write
    watch = setTimeout("refresh()", frecuency)
}