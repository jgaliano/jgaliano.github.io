function obtenerFecha(mes_dato) {

    var meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ];

    hoy = new Date();
    var mesActual = meses[(hoy.getMonth())];
    fecha = "" + hoy.getDate() + "    de    " + mesActual + "    de    " + (hoy.getYear() + 1900)
    document.reloj.Fecha.value = fecha;
}

var temporizadorID = null;
var temporizadorMarcha = false;

function iniciarReloj() {
    obtenerFecha()
    tiempoFuncion();
}

function tiempoFuncion() {
    var ahora = new Date();
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds()
    var timeValue = "" + ((hora > 12) ? hora - 12 : hora)

    timeValue += ((minutos < 10) ? ":0" : ":") + minutos
    timeValue += ((segundos < 10) ? ":0" : ":") + segundos
    timeValue += (hora >= 12) ? " P.M." : " A.M."
    document.reloj.ver.value = timeValue;

    temporizadorID = setTimeout("tiempoFuncion()", 1000);
    temporizadorMarcha = true;
}