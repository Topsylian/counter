"use strict";

const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const btnIncrement = document.querySelector(".count-up");
const btnDecrement = document.querySelector(".count-down");
const restart = document.querySelector(".reset");
const show = document.querySelector(".target-show");

let counter = 0;

if (localStorage.getItem("counter")) {
	counter = parseInt(localStorage.getItem("counter"));
}

btnIncrement.textContent = counter;

btnIncrement.addEventListener("click", () => {
	counter++;
	localStorage.setItem("counter", counter.toString());

	btnIncrement.textContent = counter;
	btnIncrement.classList.add("show");
	btnDecrement.removeAttribute("disabled");
});

btnDecrement.addEventListener("click", () => {
	localStorage.setItem("counter", counter.toString());
	counter--;

	localStorage.setItem("counter", counter.toString());

	btnIncrement.textContent = counter;
	if (counter === 0) {
		btnDecrement.disabled = true;
	}
});

if (counter === 0) {
	btnDecrement.disabled = true;
}

function reset() {
	counter = 0;

	localStorage.setItem("counter", counter.toString());
	btnIncrement.textContent = counter;
	if (counter === 0) {
		btnDecrement.disabled = true;
	}
}

restart.addEventListener("click", reset);

/*
if (localStorage.getItem("counter")) {
	counter = parseInt(localStorage.getItem("counter"));
}

btnIncrement.addEventListener("click", () => {
	counter++;
	localStorage.setItem("counter", counter.toString());
	btnIncrement.textContent = counter;
	btnIncrement.classList.add("show");
});
btnIncrement.textContent = counter;

btnIncrement.addEventListener("pointerout", () => {
	btnIncrement.classList.remove("show");
});

btnDecrement.addEventListener("click", () => {
	localStorage.setItem("counter", counter.toString());
	if (counter > 0) {
		counter--;
		btnIncrement.textContent = counter;
	}
});

btnIncrement.textContent = counter;
*/