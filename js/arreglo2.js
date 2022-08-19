console.log('arreglo2.js')
/*
let i = 0
while(i = 10){
    console.log('iteracion' + i)
    i++
}

let age = 0
do {
    console.log('valor de i: ' + i)
    age = prompt('Ingrese su edad:')
} while(age < 18)
*/
let array = new Array('Pedro', 'Jorge', 'Lucas')
//let array2 = ['Pablo', 22, false, 33]

let days = []
days[0] = 'Lunes'
days[1] = 'Martes'
days[2] = 'Miércoles'

console.log(array)

array.push('Agustin')
array.sort()
console.log(array)

//array.pop()
//array.unshift('Cecilia')
//array.shift()
//array.splice(1,2, 'Ana', 'Veronica')
//newarray = array.concat(days)
//newarray = array.slice(1,3)
//console.log(newarray)
//console.log(newarray)
//console.log(days)

let object = {
    name: 'Cristian',
    surname: 'Gonzalez',
    pet: false,
    address: {
        street: 'Avellaneda',
        num: 1244,
        floor: 3,
        flat: 'A'
    }
}
console.log(object.name + ', ' + object.surname)

let purchase = [
    {
        item: 'Manzanas',
        unit: 'Kilos',
        amount: 2
    },
    {
        item: 'Tomates',
        unit: 'Kilos',
        amount: 1
    },
    {
        item: 'Huevos',
        unit: 'Docena',
        amount: 1.5
    }
]

let elements = '<tr><th>Cantidad</th><th>Unidad</th><th>Item</th></tr>'
for (i = 0; i < purchase.length; i++) {
    elements = elements + '<tr><td>' + purchase[i].amount + '</td><td>' + purchase[i].unit + '</td><td>' + purchase[i].item + '</td></tr>'
    //console.log(purchase[i].amount + '' + purchase[i].unit + ' de ' + purchase[i].item)
}

document.getElementById('MyTable').innerHTML = elements