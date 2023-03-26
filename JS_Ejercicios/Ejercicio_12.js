
var dato_in = prompt("Escoja un plato del menu")
var dato = dato_in.toUpperCase();


switch (dato){
    case "CARNE":
        alert("Desea beber vino tinto?")
    break;
    case "PESCADO":
        alert("Desea beber vino blanco?")
    break;
    case "VERDURA":
        alert("Desea beber agua?")
    break;
    default:
        alert("Elija carne, pescado o verdura")
}

