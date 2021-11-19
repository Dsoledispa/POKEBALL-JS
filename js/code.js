window.onload = function() {
    console.log(getListRandom(10, 1, 10));
}

function getListRandom(n, min, max) {
    for (let i = 0; i < n; i++) {
        getRndInteger(min, max)
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}