// 3. Realizar un ejercicio el cual de definana las variable necesaria para solivitar una "edad", un "nombre" y "país". Una vez definidas las variables
// se ha de visualizar un mensaje en la consola que muestre el "nombre introducido y si es mayor o menor de edad".

var edad = prompt("Ingrese Edad: ")
var nombre = prompt("Ingrese Nombre: ")
var pais = prompt("Ingrese País: ")

if (edad => 18){
    alert(nombre + " es mayor de edad" + " y es de " + pais)
}else{
    alert(nombre + " es menor de edad" + " y es de " + pais)
}
