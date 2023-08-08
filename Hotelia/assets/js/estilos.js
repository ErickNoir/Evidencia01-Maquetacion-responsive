function despegarBarraMovil(){
    document.getElementById("menu").style.display = "flex"
    document.getElementById("hamburguesa").innerHTML = "<i class='fa-solid fa-bars' onclick='ocultarBarraMovil()' id='hamburguesa'></i>"
}

function ocultarBarraMovil(){
    document.getElementById("menu").style.display = "none"
    document.getElementById("hamburguesa").innerHTML = "<i class='fa-solid fa-bars' onclick='despegarBarraMovil()' id='hamburguesa'></i>"
}




function selectedoOptionButton1(){
    document.getElementById("optionButton1").style.backgroundColor = "var(--azuloscuro)"
    document.getElementById("optionButton2").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton3").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton4").style.backgroundColor = "var(--negro)"
}

function selectedoOptionButton2(){
    document.getElementById("optionButton1").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton2").style.backgroundColor = "var(--azuloscuro)"
    document.getElementById("optionButton3").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton4").style.backgroundColor = "var(--negro)"
}

function selectedoOptionButton3(){
    document.getElementById("optionButton1").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton2").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton3").style.backgroundColor = "var(--azuloscuro)"
    document.getElementById("optionButton4").style.backgroundColor = "var(--negro)"
}

function selectedoOptionButton4(){
    document.getElementById("optionButton1").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton2").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton3").style.backgroundColor = "var(--negro)"
    document.getElementById("optionButton4").style.backgroundColor = "var(--azuloscuro)"
}





function imgBuscarHabitHover(){
    document.getElementById("imgHabitacionCardHoverr").style.display = "grid";
    document.getElementById("imgHabitacionCardId").innerHTML = "<img src='../assets/img/habitaciones/habitacion1.png' onmouseout='imgBuscarHabitNonHover()'>";
}

function imgBuscarHabitNonHover(){
    document.getElementById("imgHabitacionCardHoverr").style.display = "none";
    document.getElementById("imgHabitacionCardId").innerHTML = "<img src='../assets/img/habitaciones/habitacion1.png' onmouseover='imgBuscarHabitHover()'>";
}