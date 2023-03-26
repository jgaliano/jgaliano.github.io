// 3. Pedir un calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien y Excelente

var numero = prompt("Ingrese calificación:");

if (numero >= 0 && numero < 6){
    alert("Calificación Insuficiente")
}else if (numero > 5 && numero < 7){
    alert("Calificación Suficiente")
}else if (numero >= 7 && numero < 9){
    alert("Calificación Buena")
}else if (numero >= 9 && numero < 11){
    alert("Calificación Excelente")
}
