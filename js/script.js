"use strict";

const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const btnIncrement = document.querySelector(".count-up");
const btnDecrement = document.querySelector(".count-down");
const show = document.querySelector(".target-show");

let count = 0;
btnIncrement.addEventListener("click", () => {
	count++;
	btnIncrement.textContent = count;
});

btnIncrement.addEventListener("mouseover", () => {
	btnIncrement.classList.add("show");
});

btnIncrement.addEventListener("mouseout", () => {
	btnIncrement.classList.remove("show");
});