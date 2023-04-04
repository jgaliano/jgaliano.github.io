function esVocal(vocal_dato){
    let vocales = ['A','E','I','O','U']
    vocal_dato = vocal_dato.toUpperCase()
    if (vocales.indexOf(vocal_dato) !== -1){
        return alert("True")
    }else{
        return alert("False")
    }
}

var vocal = prompt("Ingrese un caracter: ")
esVocal(vocal)