const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
	const expectedLength = Number(validationInput.dataset.length);
	const factLength = validationInput.value.length;

	if (factLength === expectedLength) {
		validationInput.classList.add("valid");
		validationInput.classList.remove("invalid");
	} else {
		validationInput.classList.add("invalid");
		validationInput.classList.remove("valid");
	}
});
