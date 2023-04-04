function mm_to_m(mm){
    let calculo = mm / 1000;
    alert(mm + " mms " + "Equivalen a " + calculo + " mts")
}
function cm_to_m(cm){
    let calculo_1 = cm / 100;
    alert(cm + " cms " + "Equivalen a " + calculo_1 + " mts")
}

function m_to_cm(m_1){
    let calculo_2 = m_1 * 100;
    alert(m_1 + " mts " + "Equivalen a " + calculo_2 + " cms")
}

function m_to_mm(m_2){
    let calculo_3 = m_2 * 1000;
    alert(m_2 + " mts " + "Equivalen a " + calculo_3 + " mms")
}

let dat
let dato = prompt("Ingrese la letra de la operación que desea realizar: \n \n Convertir:\n a. mm a m \n b. cm a m \n c.  m a cm \n d. m amm")
dato = dato.toUpperCase();
switch (dato){
    case "A":
        dat = prompt("Ingrese milimetros a convertir: ")
        mm_to_m(dat)
    break;
    case "B":
        dat = prompt("Ingrese centimetros a convertir: ")
        cm_to_m(dat)
    break;
    case "C":
        dat = prompt("Ingrese metros a convertir: ")
        m_to_cm(dat)
    break;
    case "D":
        dat = prompt("Ingrese metros a convertir: ")
        m_to_mm(dat)
    break;
    default:
    alert("Ingrese una opción valida")
}
