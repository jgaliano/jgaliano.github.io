function generarCaracteres(dato, dato_n){
    let numero = parseInt(dato_n, 10)
    let lista = []

    while (numero >= 1){
        lista = lista + dato
        numero = numero - 1
    }
    // alert(lista.length)
    alert(lista)
}


let cadena_n = prompt("Ingrese un caracter")
let integer_n = prompt("Ingrese un numero entero")
generarCaracteres(cadena_n, integer_n)




