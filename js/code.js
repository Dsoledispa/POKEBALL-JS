window.onload = function() {
    let ball = document.getElementById("ball");
    ball.onclick = buttonOpacity;
    return false;
}

function buttonOpacity() {
    if (ball.style.opacity === "0.5") {
        ball.style.opacity = "1";
    } else {
        ball.style.opacity = "0.5";
    }

}