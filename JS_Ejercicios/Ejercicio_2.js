// 2. Elaborar un programa que le ayude a viajar. El programa pide al usuario si va a viajar con auto, tren, bicibleta, motocicleta o autobus. 
// Si va en tren o autobus le recordará que lleve dinero para transporte.

var transporte = prompt("Los medios de transporte disponibles son:\nAuto, Tren, Bicicleta, Motocicleta y Autobus.\nIngrese el medio de tranporte a utilizar: ")
var eleccion = transporte.toUpperCase();

if (eleccion == "TREN" || eleccion == "AUTOBUS"){
  alert("Favor recordar llevar dinero para transporte");
}else if(eleccion == "AUTO" || eleccion == "BICICLETA" || eleccion == "MOTOCICLETA"){
  alert("Excelente Elección")
}



