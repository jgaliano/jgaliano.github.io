document.getElementById("other").style.color = "black"
document.addEventListener("DOMContentLoaded", function(){
    var btn_On = document.getElementById("btn_On")
    var btn_Del = document.getElementById("btn_Del")
    var btn_Cl = document.getElementById("btn_Cl")
    var btn_1 = document.getElementById("btn_1")
    var btn_2 = document.getElementById("btn_2")
    var btn_3 = document.getElementById("btn_3")
    var btn_4 = document.getElementById("btn_4")
    var btn_5 = document.getElementById("btn_5")
    var btn_6 = document.getElementById("btn_6")
    var btn_7 = document.getElementById("btn_7")
    var btn_8 = document.getElementById("btn_8")
    var btn_9 = document.getElementById("btn_9")
    var btn_S = document.getElementById("btn_S")
    var btn_R = document.getElementById("btn_R")
    var btn_0 = document.getElementById("btn_0")
    var btn_M = document.getElementById("btn_M")
    var btn_D = document.getElementById("btn_D")
    var btn_I = document.getElementById("btn_I")

    btn_On.onclick = function(event){
        document.getElementById("other").innerHTML = ""
        document.getElementById("other").style.color = "skyblue"
        if(btn_On.classList.contains("rojo_button")){
            btn_On.classList.remove("rojo_button");
            btn_On.classList.add("verde_button");
          }else if(btn_On.classList.contains("verde_button")){
            btn_On.classList.remove("verde_button");
            btn_On.classList.add("rojo_button");
            document.getElementById("other").style.color = "black"
            document.getElementById("other").innerHTML = ""
          }
    }
    btn_Del.onclick = function(event){document.getElementById("other").innerHTML = ""}
    btn_Cl.onclick = function(event){document.getElementById("other").innerHTML = ""}

    btn_1.onclick = function(event){
        var t_1 = document.createTextNode("1");
        document.getElementById("other").appendChild(t_1)
    }
    btn_2.onclick = function(event){
        var t_1 = document.createTextNode("2");
        document.getElementById("other").appendChild(t_1)
    }
    btn_3.onclick = function(event){
        var t_1 = document.createTextNode("3");
        document.getElementById("other").appendChild(t_1)
    }
    btn_4.onclick = function(event){
        var t_1 = document.createTextNode("4");
        document.getElementById("other").appendChild(t_1)
    }
    btn_5.onclick = function(event){
        var t_1 = document.createTextNode("5");
        document.getElementById("other").appendChild(t_1)
    }
    btn_6.onclick = function(event){
        var t_1 = document.createTextNode("6");
        document.getElementById("other").appendChild(t_1)
    }
    btn_7.onclick = function(event){
        var t_1 = document.createTextNode("7");
        document.getElementById("other").appendChild(t_1)
    }
    btn_8.onclick = function(event){
        var t_1 = document.createTextNode("8");
        document.getElementById("other").appendChild(t_1)
    }
    btn_9.onclick = function(event){
        var t_1 = document.createTextNode("9");
        document.getElementById("other").appendChild(t_1)
    }

    btn_S.onclick = function(event){
        var t_1 = document.createTextNode("+");
        document.getElementById("other").appendChild(t_1)
    }
    btn_R.onclick = function(event){
        var t_1 = document.createTextNode("-");
        document.getElementById("other").appendChild(t_1)
    }
    btn_0.onclick = function(event){
        var t_1 = document.createTextNode("0");
        document.getElementById("other").appendChild(t_1)
    }
    btn_M.onclick = function(event){
        var t_1 = document.createTextNode("*");
        document.getElementById("other").appendChild(t_1)
    }
    btn_D.onclick = function(event){
        var t_1 = document.createTextNode("/");
        document.getElementById("other").appendChild(t_1)
    }
    btn_I.onclick = function(event){
        const operacionTag = document.getElementById('other');
        const operacionTexto = operacionTag.textContent; // Obtener el contenido de la etiqueta
        let numero1 = '';
        let numero2 = '';
        let signo = '';
        for (let i = 0; i < operacionTexto.length; i++) {
        const caracter = operacionTexto.charAt(i);
        if (caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/') {
            signo = caracter;
        } else if (caracter === ' ') {
            // Ignorar espacios en blanco
        } else if (signo === '') {
            numero1 += caracter;
        } else {
            numero2 += caracter;
        }
        }
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        let resultado = 0;
        if (signo === '+') {
        resultado = numero1 + numero2;
        } else if (signo === '-') {
        resultado = numero1 - numero2;
        } else if (signo === '*') {
        resultado = numero1 * numero2;
        } else if (signo === '/') {
        resultado = numero1 / numero2;
        } else {
        console.error('Signo aritmético no reconocido');
        }
        operacionTag.textContent = `${numero1} ${signo} ${numero2} = ${resultado}`; // Actualizar el contenido de la etiqueta
    }
})


    