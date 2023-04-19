const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
	const expectedLength = Number(validationInput.dataset.length);
	const factLength = validationInput.value.length;
	validationInput.classList.remove("valid", "invalid");

	factLength === expectedLength
		? validationInput.classList.add("valid")
		: validationInput.classList.add("invalid");
});

