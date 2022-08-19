var producto = prompt('Ingrese el producto:');
var marca = prompt('Ingrese la marca:');
var precio = 100;

function calcImp(pcio){
    if(isNaN(pcio)){
        alert("Ingresó un parámetro no numérico")
    }
    else{
        var precioFinal = pcio * 1.21;
        function calcRecargo(){
            precioFinal *= 1.4;
        }
        calcRecargo();
        return precioFinal;
    }
}

function transformar(palabra){
    console.log(palabra.toUpperCase());
    return palabra.toUpperCase();
}

producto = transformar(producto);
marca = transformar(marca);

document.writeln("<br> El producto es " + producto + " de la marca " + marca + " y el precio es: " + calcImp(precio));