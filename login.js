const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle");

togglePassword.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.add("show");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("show");
  }
});

