window.onload = function() {
<<<<<<< HEAD
    alert("Hello World");
=======
    saludo();

}

function saludo() {
    let salud = document.getElementById("saludo");
    let hoy = new Date();
    let hora = hoy.getHours();
    if (hora < 7 || hora > 17) {
        //noche
        document.body.style.backgroundColor = "#3E3730";
        document.body.style.color = "white";
        salud.innerHTML = "¡Buenas noches!";

    } else {
        //dia
        document.body.style.backgroundColor = "rgb(238, 107, 47)";
        salud.innerHTML = "¡Buenos días!";

    }

>>>>>>> ejercicio_2
}