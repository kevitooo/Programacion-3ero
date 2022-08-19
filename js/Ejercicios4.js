var year = Number(prompt("Año:"));
var month = Number(prompt("Mes:"));
var day = Number(prompt("Día:"));

month--;

var date = new Date(year, month, day)

if(date.getDate() < 10){
    document.write("0" + date.getDate())
} else {
    document.write(date.getDate())
}

document.write("/")

if(date.getMonth() < 9){
    document.write("0" + (date.getMonth() + 1))
} else {
    document.write(date.getMonth() + 1)
}

document.write("/" + date.getFullYear() + "<br>")

var i
var term = 30

for(i = 0; i < 3; i++){
    document.write("Fecha a " + term + " días: ")
    date.setMonth(date.getMonth() + 1)

    if(date.getDate() < 10){
        document.write("0" + date.getDate())
    } else {
        document.write(date.getDate())
    }

    document.write("/")

    if(date.getMonth() < 9){
        document.write("0" + (date.getMonth() + 1))
    } else {
        document.write(date.getMonth() + 1)
    }

    document.write("/" + date.getFullYear() + "<br>")

    term += 30
}