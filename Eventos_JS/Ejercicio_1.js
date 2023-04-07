document.addEventListener("DOMContentLoaded", function(event) {
    function colocarImagen() {
      var img4 = '<img src="/Eventos_JS/img/10.png" width="300px">';
      document.getElementById("observarImg").innerHTML = img4;
    }
    
    document.getElementById("btnColocarImagen").addEventListener("click", colocarImagen);
  });
