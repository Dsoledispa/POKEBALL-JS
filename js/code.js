window.onload = function() {
    console.log(getListRandom(10, 1, 10));
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