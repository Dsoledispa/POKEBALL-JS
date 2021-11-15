let salud = document.getElementById("saludo").value;

window.onload = function() {
    saludo();
    console.log(salud);
}

function saludo() {
    if (hora < 7 || hora > 17) {
        //noche
        document.body.style.backgroundColor = "red";

    } else {

        //día

    }

}