// 7. Crear una estructura if que contemple seis posibles colores que pueda escribir el usuarios y una opción extra para decir si un color no es uno de los 
// seis posibles. 

// Esta estructura estará formada por un solo if else con sus necesarios else if. Los colores son rojo, anaranjado, amarillo, verde, celeste y azul.

// El color a evaluar con el condicional se debe guardar en una variable en un prompt(). La evaluación se hará con este valor.

var color_dato = prompt("Ingrese los posibles colores: Rojo, Anaranjado, Amarillo, Verde, Celeste y Azul")

var color = color_dato.toUpperCase()

if (color == "ROJO" || color == "AMARILLO" || color == "ANARANJADO" || color == "VERDE" || color == "CELESTE" || color == "AZUL"){
    alert("El color ingresado es correcto")
}else{
    alert("El color ingresado no es correcto. Por favor intentar nuevamente.")
}   