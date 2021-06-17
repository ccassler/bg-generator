let body = document.querySelector("body");
let css = document.querySelector("h3");
let colorout = document.getElementById("colorout");
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let button = document.querySelector("button")

// Source: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function changeBg() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
	colorout.textContent = color1.value + "  " + color2.value;
}

function changeBgClick() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
    changeBg();
}

window.addEventListener("DOMContentLoaded", changeBg);
color1.addEventListener("input", changeBg);
color2.addEventListener("input", changeBg);
button.addEventListener("click", changeBgClick);
