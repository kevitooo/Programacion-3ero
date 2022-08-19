var date = new Date();
var day;
var month;
var weekDay = date.getDay();
var dayMonth = date.getDate();
var year = date.getFullYear();
var hour = date.getHours();
var min = date.getMinutes();

switch (weekDay){
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

switch (date.getMonth()){
    case 0:
        month = "Enero";
        break;
    case 1:
        month = "Febrero";
        break;
    case 2:
        month = "Marzo";
        break;
    case 3:
        month = "Abril";
        break;
    case 4:
        month = "Mayo";
        break;
    case 5:
        month = "Junio";
        break;
    case 6:
        month = "Julio";
        break;
    case 7:
        month = "Agosto";
        break;
    case 8:
        month = "Septiembre";
        break;
    case 9:
        month = "Octubre";
        break;
    case 10:
        month = "Noviembre";
        break;
    case 11:
        month = "Diciembre";
        break;
}

if ((min >= 0) && (min < 10)){
    min = "0" + min;
}

var outLine = "Hoy es " + day + ", " + dayMonth + " de ";
var outLine = outLine + month + " de " + year + " y son las ";
var outLine = outLine + hour + ":" + min + " horas";
document.write(outLine);