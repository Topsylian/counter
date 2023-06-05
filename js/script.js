"use strict";

const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const btnIncrement = document.querySelector(".count-up");
const btnDecrement = document.querySelector(".count-down");
const restart = document.querySelector(".reset");
const setBtn = document.querySelector(".set-button");
const setChoice = document.querySelector(".set-target");

const targetHundred = document.querySelector(".hundred");
const targetThousand = document.querySelector(".thousand");
const targetThirty = document.querySelector(".thirty");

const done = document.querySelector(".done");
const show = document.querySelector(".target-show");

let counter = 0;
let firstTargetNumber = 100;
let secondTargetNumber = 1000;
let thirdTargetNumber = 33;

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

if (localStorage.getItem("firstTarget")) {
  firstTargetNumber = parseInt(localStorage.getItem("firstTarget"));
}

show.textContent = firstTargetNumber;
targetHundred.addEventListener("click", function () {
  firstTargetNumber = 100;

  localStorage.setItem("firstTarget", firstTargetNumber.toString());

  show.textContent = firstTargetNumber;
});

if (localStorage.getItem("firstTarget")) {
  firstTargetNumber = parseInt(localStorage.getItem("firstTarget"));
}

show.textContent = firstTargetNumber;
targetThousand.addEventListener("click", function () {
  firstTargetNumber = 1000;

  localStorage.setItem("firstTarget", firstTargetNumber.toString());

  show.textContent = firstTargetNumber;
});

if (localStorage.getItem("firstTarget")) {
  firstTargetNumber = parseInt(localStorage.getItem("firstTarget"));
}

show.textContent = firstTargetNumber;
targetThirty.addEventListener("click", function () {
  firstTargetNumber = 33;

	localStorage.setItem("firstTarget", firstTargetNumber.toString());

  show.textContent = firstTargetNumber;
});

done.addEventListener("click", function () {
  localStorage.removeItem("flex");
  setChoice.style.left = "-100%";
});

localStorage.setItem("display", "flex");

function showSet() {
	setChoice.style.visibility = "visible";
	setChoice.style.left = "10%";
	body.classList.add(localStorage.getItem("display"));
}

if (localStorage.getItem("display")) {
	body.classList.add(localStorage.getItem("display"));
}

setBtn.addEventListener("click", showSet);

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
