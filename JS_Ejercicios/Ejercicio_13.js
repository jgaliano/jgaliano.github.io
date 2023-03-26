var  precio_dato = prompt("Ingrese precio de compra:")
var descuetno = 0
var total = 0
var precio = parseInt(precio_dato)

switch(true){
    case (precio < 100):
        descuetno = 0
    break;
    case (precio >= 100 && precio <= 300):
        descuetno = precio * 0.05;
    break;
    case (precio > 300 && precio <= 400):
        descuetno = precio * 0.10;
    break;
    case (precio > 400):
        descuetno = precio * 0.15;
    break;
}

total = precio - descuetno;

alert("El precio de compra es: Q" + precio + "\nEl descueto por precio es: Q" + descuetno + "\nTotal de compra: Q" + total) 