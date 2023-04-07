document.addEventListener("DOMContentLoaded", function(event){
    function myfunction(){
        document.getElementById("evento_n").style.backgroundColor = "skyblue"
    }
    document.getElementById("evento_n").addEventListener("focus", myfunction);
})  