// 5. Realizar un programa que dirige a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco y
// agua. Si pide cerveza o vino se le dirige a la barra y si no  se le dirige a la tienda.

var lugar = prompt("Las opciones de bebidas son: Vino, Cerveza, Refresco y Agua\n¿Que desea ordenar?: ")

lugar_dato = lugar.toUpperCase();

if (lugar_dato == "CERVEZA" || lugar_dato == "VINO"){
    alert("Favor dirigirse a la barra.");
}else if (lugar_dato == "REFRESCO" || lugar_dato == "AGUA"){
    alert("Favor dirigirse a la tienda.")
}