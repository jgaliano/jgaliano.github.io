
document.addEventListener("DOMContentLoaded", function(){

    var myInput = document.getElementById("myInput")

    myInput.onselect = function(event){
        alert("Seleccionaste un texto")
        document.getElementById("demo").innerHTML = "Seleccionaste un texto"
    }


})