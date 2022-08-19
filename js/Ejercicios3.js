let month = Number(prompt("Introduce mes"))
let year = Number(prompt("Introduce año"))

month = month - 1

let date = new Date(year, month)
let day = date.getDay()

switch (month){
    case 0:
        letterMonth = "Enero";
        break;
    case 1:
        letterMonth = "Febrero";
        break;
    case 2:
        letterMonth = "Marzo";
        break;
    case 3:
        letterMonth = "Abril";
        break;
    case 4:
        letterMonth = "Mayo";
        break;
    case 5:
        letterMonth = "Junio";
        break;
    case 6:
        letterMonth = "Julio";
        break;
    case 7:
        letterMonth = "Agosto";
        break;
    case 8:
        letterMonth = "Septiembre";
        break;
    case 9:
        letterMonth = "Octubre";
        break;
    case 10:
        letterMonth = "Noviembre";
        break;
    case 11:
        letterMonth = "Diciembre";
        break;
}

document.write("<h1>" + letterMonth + " de " + year + "</h1>")

while(date.getMonth() == month){
    switch(date.getDay()){
        case 0:
            day = "Domingo";
            break;
        case 1:
            day = "Lunes";
            break;
        case 2:
            day = "Martes";
            break;
        case 3:
            day = "Miércoles";
            break;
        case 4:
            day = "Jueves";
            break;
        case 5:
            day = "Viernes";
            break;
        case 6:
            day = "Sábado";
            break;
    }
    document.write(date.getDate() + " - " + day + "<br>")
    date.setDate(date.getDate() + 1)
}