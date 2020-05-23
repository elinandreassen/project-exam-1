const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  console.log("The form was submitted");

// Firstname section
  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;
  let firstNameHasError = "";

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
    firstNameHasError = false;
  } else {
    firstNameError.style.display = "block";
    firstNameHasError = true;
  }

// Lastname section
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;
  let lastNameHasError = "";

  if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
    lastNameHasError = false;
  } else {
    lastNameError.style.display = "block";
    lastNameHasError = true;
  }

// Email and email error section
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  const emailValue = email.value;
  let emailHasError = "";
  let invalidEmailHasError = "";

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
    emailHasError = false;
  } else {
    emailError.style.display = "block";
    emailHasError = true;
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
    invalidEmailHasError = false;
  } else {
    invalidEmailError.style.display = "block";
    invalidEmailHasError = true;
  }

// Message section
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;
  let messageHasError = "";

  if (checkInputLength(messageValue) === true) {
    messageError.style.display = "none";
    messageHasError = false;
  } else {
    messageError.style.display = "block";
    messageHasError = true;
  }
};

// Check for input
function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 1) {
    return true;
  } else {
    return false;
  }
};

// Email validation
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};
