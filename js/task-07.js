const sizeControleEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeControleEl.addEventListener("input", () => {
	text.style.fontSize = `${sizeControleEl.value}px`;
});


