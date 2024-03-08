const screenColor = document.querySelector(".screen_color");
const btn = document.querySelector(".btn");

function cambiarColor() {
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }

    document.body.style.backgroundColor = color;
    screenColor.textContent = color;
}

window.addEventListener("load", () => {
    cambiarColor();
});

btn.addEventListener("click", () => {
    cambiarColor();
});
