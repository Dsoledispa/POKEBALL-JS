window.onload = function() {
    saludo();
    console.log(getListRandom(10, 1, 10));
    let ball = document.getElementById("ball");
    ball.onclick = buttonOpacity;

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

}

function getListRandom(n, min, max) {
    let number = [];
    for (let i = 0; i < n; i++) {
        number.push(getRndInteger(min, max));
    }
    return number;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function buttonOpacity() {
    if (ball.style.opacity === "0.5") {
        ball.style.opacity = "1";
    } else {
        ball.style.opacity = "0.5";
    }

}