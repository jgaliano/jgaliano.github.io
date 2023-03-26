// 6. Realizar un ejercicio en el cual se definan las variables que consideres necesarias y utilizar el "si" condicional para obetener un resultado.
// Este ejercicio es ed libre elección, prueba tu creatividad.

alert("El siguiente programa tiene la capacidad de ayudarle a escoger un nuevo celular dependiendo de sus necesidaes e intereses.");
alert("Favor ingresar los datos solamente en números")
var almacenamiento = prompt("Las versiones estandar de almacenamiento son 64GB, 128GB, 256GB y 512GB\n\n¿Que capacidad necesita?");
var camara = prompt("La cámara es un aspecto fundamental de todo buen celular, los rangos son los siguientes:\n\n5Mpx - 19Mpx = Estandar\n20Mpx - 50Mpx = Excelente\n51Mpx - 200Mpx = Profesional");
var ram = prompt("La memoria RAM definirá la capacidad de trabajo y velocidad del celular, escoja la que mejor se adapta a sus necesidades:\n\n4GB = Estandar\n8GB = Preferencia\n12GB = Excelente\n16GB = Profesional");
var precio = prompt("Ingrese rango de precio presupuestado:\n\nQ500 - Q999\nQ1,000 - Q4,999\nQ5,000 - Q9,999\nQ10,000 - Q15,000");

alert("De acuerdo a la información ingresada esta es la recomendación: ")

if (precio >= 500 & precio < 999){
    alert("El Samsung Galaxy A10 se ajusta adecuadamente a sus interes de uso")
}else if (precio >= 1000 && precio < 4999){
    alert("El XIAOMI 12T se ajusta adecuadamente a sus interes de uso")
}else if (precio >= 5000 && precio < 9999){
    alert("El Samsung Galaxy S23+ se ajusta adecuadamente a sus interes de uso")
}else if (precio >= 10000 && precio < 15000){
    alert("El Iphone 14 Pro Max se ajusta adecuadamente a sus interes de uso")
}