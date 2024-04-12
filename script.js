document.querySelector("form").addEventListener("submit", (e) => {
	if (checkPasswordMatch() === false) {
		e.preventDefault();
	}
});

function checkPasswordMatch() {
	const password = document.querySelector("#Password").value;
	const confPassword = document.querySelector("#Conf_password").value;

	if (password !== confPassword) {
		alert("Passwords do not match");
		return false;
	} else {
		return true;
	}
}
