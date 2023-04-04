function calcularV(dato_1, dato_2){
    alert("A continuación calcularemos el voltaje")
    var v_d = dato_1 * dato_2
    alert("El voltaje es: " + v_d + "V")
}

function calcularI(dato_3, dato_4){
    alert("A continuación calcularemos la corriente")
    var i_d = dato_3 / dato_4
    alert("La corriente es: " + i_d + "I")
}

function calcularR(dato_5, dato_6){
    alert("A continuación calcularemos la resistencia")
    var  r_d = dato_5 * dato_6
    alert("La resistencia es: " + r_d + "Ω")
}


var opciones = prompt("Seleccione una opción: \n a. Calcular tensión eléctrica \n b. Calcular intensidad de la corriente eléctrica \n c. Calcular resistencia eléctrica")
var voltaje_dato
var corriente_dato
var resistencia_dato

opciones = opciones.toUpperCase()
if (opciones == "A"){
    corriente_dato = prompt("Ingrese corriente: ")
    resistencia_dato = prompt("Ingrese resistencia: ")
    calcularV(corriente_dato, resistencia_dato)
}else if(opciones == "B"){
    voltaje_dato = prompt("Ingrese voltaje: ")
    resistencia_dato = prompt("Ingrese resistencia: ")
    calcularI(voltaje_dato, resistencia_dato)
}else if(opciones == "C"){
    voltaje_dato = prompt("Ingrese voltaje: ")
    corriente_dato = prompt("Ingrese corriente: ")
    calcularR(voltaje_dato, corriente_dato)
}