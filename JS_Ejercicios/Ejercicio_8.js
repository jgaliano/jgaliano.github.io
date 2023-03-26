// 8. Ahora debe escribir con if else sin ultilizar if else una estructura parecidad a la del ejercicio anterior. Esta vez, será como un minijuego, se pedirá uno de los seis colores y el midmo if dirá si el color
//         estará en la lista o no. No los tienes que indicar el prompt(), el jugador debe acertar uno de los seis. Si no acierta, satará el else diciendo que el color no está en el mapa.

var color_dato = prompt("Intente acertar el color: ")

var color = color_dato.toUpperCase()

if (color == "ROJO" || color == "AMARILLO" || color == "ANARANJADO" || color == "VERDE" || color == "CELESTE" || color == "AZUL"){
    alert("El color ingresado es correcto")
}else{
    alert("El color ingresado no se encuentra en la lista.")
}   