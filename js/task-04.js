const counterValue = document.querySelector("#value");

let value = 0;
counterValue.textContent = value;


const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
	value++;
	counterValue.textContent = value;
});
decrementBtn.addEventListener("click", () => {
	value--;
	counterValue.textContent = value;
});