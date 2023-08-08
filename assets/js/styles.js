function despegarBarraMovil(){
    document.getElementById("menu").style.display = "flex"
    document.getElementById("hamburguesa").innerHTML = "<i class='fa-solid fa-bars' onclick='ocultarBarraMovil()' id='hamburguesa'></i>"
}

function ocultarBarraMovil(){
    document.getElementById("menu").style.display = "none"
    document.getElementById("hamburguesa").innerHTML = "<i class='fa-solid fa-bars' onclick='despegarBarraMovil()' id='hamburguesa'></i>"
}