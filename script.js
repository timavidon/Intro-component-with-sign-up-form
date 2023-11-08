const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.querySelector(".submit-btn");
const errorMessages = document.querySelectorAll(".req-msg");

// Email pattern
const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nameCheck(firstName, firstName.value.trim(), errorMessages[0]);
  nameCheck(lastName, lastName.value.trim(), errorMessages[1]);
  nameCheck(password, password.value.trim(), errorMessages[3]);

  let emailValue = email.value.trim();
  if (!validateEmail(emailValue)) {
    email.classList.remove("success");
    email.classList.add("error");
    errorMessages[2].classList.add("error-msg");
  } else if (validateEmail(emailValue)) {
    email.classList.remove("error");
    errorMessages[2].remove("error-msg");
    email.classList.add("success");
  } else {
    email.classList.remove("error");
    email.classList.remove("success");
    errorMessages[2].classList.remove("error-msg");
  }
});

// Checks if the name is empty
function nameCheck(req, name, num) {
  // Checks if wrong
  if (name === "") {
    req.classList.remove("success");
    req.classList.add("error");
    num.classList.add("error-msg");
  }
  // Checks if right
  else if (name !== "") {
    req.classList.remove("error");
    num.classList.remove("error-msg");
    req.classList.add("success");
  }
  // Defualt
  else {
    req.classList.remove("error");
    req.classList.remove("success");
    num.classList.remove("error-msg");
  }
}
