document.addEventListener("DOMContentLoaded", function(){
    
    var miInput = document.getElementById("miInput")

    miInput.onmousedown = function(event){
        miInput.style.backgroundColor = "skyblue"
        miInput.style.color = "black"
    }

    miInput.onmouseup = function(event){
        miInput.style.backgroundColor = "black"
        miInput.style.color = "white"
    }

})