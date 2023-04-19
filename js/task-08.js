const loginFormEl = document.querySelector("form.login-form");

loginFormEl.addEventListener("submit", (event) => {
	event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

	if (!email.value || !password.value) {
		alert(`Всі поля повинні бути заповнені.`)
		return;
	} 
	const formData = {
		email: email.value,
		password: password.value,
}
	console.log(formData)
	loginFormEl.reset();
});

