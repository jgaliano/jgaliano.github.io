
//mostrar texto en el cuerpo de la pagina
// document.write("HTML, CSS Y JS")

// mostrar una imagen en el cuerpo de la pagina para que sea más rapido al cargar que si lo colocaramos en el css
// window.onload = document.write('<img src="../css.png">')

//enlazar con el dic del html
// function mostrar(){
//     document.getElementById("res").innerHTML = "Mostrar información mediante INNER HTML"
// }

//una prueba más con los mismos elementos pero con otros texto para probar la función llamar del js
// function hola(){
//     document.getElementById("res").innerHTML = "Hola a todos, yo soy su amigo dinosaurio gigante barnie"
// }

//funcion para duplicar la entrada de lo que se está escribiendo en un tipo de espejo
// function disparador(){
//     valor = document.getElementById("entrada").value;
//     document.getElementById("salida").innerHTML = valor;
// }

// funcion para agregar imagen como la de batman
// function mostrarImg(){
//     document.getElementById("imagen").innerHTML = '<img src="/Eventos_JS/img/batman.png">'
// }

//funcion para agregar texto en el htmk con apenchild
// function agregarTexto(){
//     var text = document.createTextNode("Esto es un neuvo parrafo agregaro con apenChild()")
//     document.getElementById("texto").appendChild(text);
// }



// funcion para crear divs con un click usando un button con estilo y borde
// function agregarContenedor(){
//     var nuevoContenedor = document.createElement("div");
//     nuevoContenedor.style.cssText = 'border:8px solid #56aaf3;padding:12px;width:160px;margin:12px 0 12px;';
//     var texto = document.createTextNode("Nuevo Contenedor");
//     nuevoContenedor.appendChild(texto);
//     document.getElementById("d").appendChild(nuevoContenedor);
// }


// funcion para colocar dos imagenes en el html utilizando DOMContentLoaded   
var img1 = '<img src="/Eventos_JS/img/1.png" width="100px">';
var img2 = '<img src="/Eventos_JS/img/2.png" width="100px">';
var img3 = '<img src="/Eventos_JS/img/3.png" width="100px">';
var img4 = '<img src="/Eventos_JS/img/4.png" width="100px">';
var img5 = '<img src="/Eventos_JS/img/5.png" width="100px">';
var img6 = '<img src="/Eventos_JS/img/6.png" width="100px">';
var img7 = '<img src="/Eventos_JS/img/7.png" width="100px">';
var img8 = '<img src="/Eventos_JS/img/8.png" width="100px">';
var img9 = '<img src="/Eventos_JS/img/9.png" width="100px">';
var img10 = '<img src="/Eventos_JS/img/10.png" width="100px">';
document.addEventListener("DOMContentLoaded", function (event){
    // document.getElementById("observarImg").innerHTML = img1 + img2 + img3 + img4 + img5 + img6 + img7 + img8 + img9 + img10
    document.getElementById("observarImg").innerHTML = img10
})


// funcion para indica que perdió el foco
// function eventoBlur(){
//     alert("El campo de entrada perdio el foco")
// }

//otra opcion que indica que perdió el foco "ESTA MEJOR ESTE"
// document.getElementById("b1").onblur = function(){
//     eventoBlur()
// }
// function eventoBlur(){
//     alert("El campo de entrada perdió el foco");
// }

//funcion para convertir a mayusculas las letras cuando pierde el foco la caja de texto
// function convertir(){
//     var x = document.getElementById("mayus");
//     x.value = x.value.toUpperCase();
// }

// funcion para que responda al click
// function cli(){
//     document.getElementById("c1").innerHTML = "ME HAZ CLICADO"
// }


// funcion para mover una imagen a una caja de texto, NO FUNCIONÓ QUEDÓ EN HACERLO Y PASARLO
// function allowDrop(ev){
//     ev.preventDefault();
// }
// function drag(ev){
//     ev.dataTransfer.setData("text", ev.target.id);
// }
// function drop(ev){
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text")
//     ev.target.appenChild(document.getElementById(data));
// }

//funciona para cuando no se puede cambiar la imagen desde la dirección o algo parecido
// function verImagen(){
//     document.getElementById("im").innerHTML = "No se puedo cargar la imagen"
// }


// funcion para darle color a una caja de texto con color en el focus al dar clik en la caja
// function cambiaColor(){
//     document.getElementById("c1").style.backgroundColor = "skyblue";
// }


//funcion para darle color a una caja de texto en el focus cuando se escribe en la caja
function vuelveCambiar(element){
    element.style.backgroundColor = "red";
}

// funcion para que el texto cambie si se presiona o se suelta el texto 
// function mouseD(){
//     document.getElementById("cambio").innerHTML = "El boton del raton se mantiene presionado"
// }
// function mouseU(){
//     document.getElementById("cambio").innerHTML = "El boton del raton se suelta"
// }

// funcion para que indique que se seleccionó texto en la caja de texto
// function seleccionar(){
//     document.getElementById("sel").innerHTML = "¡Seleccionaste un texto!"
// }

//
function enviar(){
    alert("El formulario fue enviado")
}