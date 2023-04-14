const loginFormEl = document.querySelector("form.login-form");

loginFormEl.addEventListener("submit", (event) => {
	event.preventDefault();

	const emailInput = loginFormEl.elements.email;
	const passwordInput = loginFormEl.elements.password;

	if (!emailInput.value || !passwordInput.value) {
		alert(`Всі поля повинні бути заповнені.`)
		return;
	} 
	const formData = {
		email: emailInput.value,
		password: passwordInput.value,
	}

	console.log(formData)

	loginFormEl.reset();
});