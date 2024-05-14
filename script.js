const password = document.querySelector("#password");
const message = document.querySelector("#message");
const lowercase = document.querySelector("#lowercase");
const capital = document.querySelector("#capital");
const number = document.querySelector("#number");
const lengths = document.querySelector("#length");
const createAccBtn = document.querySelector(".submit");
const confirm = document.querySelector("#confirm-password")
const eyeIcon = document.querySelector(".fa-eye")

password.addEventListener("focus", function() {
    message.classList.remove("hide");
});

password.addEventListener("blur", function() {
    message.classList.add("hide");
});

password.addEventListener("keyup", function() {
    let lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid")
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }

    let upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid")
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    let numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid")
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (password.value.length >= 8 && password.value.length <= 20) {
        lengths.classList.remove("invalid");
        lengths.classList.add("valid");
    } else {
        lengths.classList.remove("valid");
        lengths.classList.add("invalid");
    }
});

createAccBtn.addEventListener("click", function() {
    if (password.value === confirm.value) {
        form.submit();
    } else {
        alert("Password confirmation must match password. Try again.")
    }
});

eyeIcon.addEventListener("click", function() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
    if (confirm.type === "password") {
        confirm.type = "text";
    } else {
        confirm.type = "password";
    }
});