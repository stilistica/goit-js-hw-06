const sizeControleEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${sizeControleEl.value}px`;
sizeControleEl.addEventListener("input", () => {
	text.style.fontSize = `${sizeControleEl.value}px`;
});


