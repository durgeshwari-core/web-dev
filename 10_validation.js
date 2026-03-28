

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    // reset errors first
    emailError.style.display = "none";
    passwordError.style.display = "none";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const emailans = emailRegex.test(email.value);
    const passwordans = passwordRegex.test(password.value);

    if (!emailans) {
        emailError.textContent = "Email is not valid";
        emailError.style.display = "block";
    }

    if (!passwordans) {
        passwordError.textContent = "Password is not valid";
        passwordError.style.display = "block";
    }
});