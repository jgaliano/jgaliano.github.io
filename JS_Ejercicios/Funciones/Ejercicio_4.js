function numoerMayor(n_1, n_2, n_3){
    
    if(n_1 == n_2 && n_2 == n_3 && n_1 == n_3){
        alert("Los tres numeros son iguales")
    }else{
        let n_mayor = Math.max(n_1, n_2, n_3)
        alert("El número mayor es: " + n_mayor)
    }
    
}

var dato_1 = prompt("Ingrese numero 1")
var dato_2 = prompt("Ingrese numero 2")
var dato_3 = prompt("Ingrese numero 3")

numoerMayor(dato_1, dato_2, dato_3)



