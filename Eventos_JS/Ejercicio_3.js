
document.addEventListener('DOMContentLoaded', function() {
    // Se crea una variable y se asigna al elemento desde el HTML
    var miInput = document.getElementById('miInput');

    // Se agrega el evento que queremos que realice
   miInput.onkeydown = function(event){
        miInput.style.backgroundColor = "skyblue"
   }
  });









