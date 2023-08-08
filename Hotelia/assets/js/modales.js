let modal1 = document.getElementById("modal1");

function abrirModal(){
    modal1.style.display="grid";
}

function cerrarModal(){
    modal1.style.display="none";
}


document.addEventListener("mouseup", function(event) {
    var contenidoModal = document.querySelector(".contenidoModal");
    if (!contenidoModal.contains(event.target)) {
        modal1.style.display="none"
    }
    else {
        modal1.style.display="grid"
    }
});