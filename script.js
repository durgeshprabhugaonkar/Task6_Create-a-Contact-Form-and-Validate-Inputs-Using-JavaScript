// Select elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMsg = document.getElementById("successMsg");

// Regex for email validation
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Function to show error
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.textContent = message;
  input.style.borderColor = "red";
}

// Function to show success
function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.textContent = "";
  input.style.borderColor = "green";
}

// Validate form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    valid = false;
  } else {
    showSuccess(nameInput);
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    valid = false;
  } else if (!emailInput.value.match(emailPattern)) {
    showError(emailInput, "Enter a valid email");
    valid = false;
  } else {
    showSuccess(emailInput);
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message is required");
    valid = false;
  } else {
    showSuccess(messageInput);
  }

  // If all valid
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();

    // Reset input borders
    [nameInput, emailInput, messageInput].forEach(input => {
      input.style.borderColor = "#bbb";
    });
  } else {
    successMsg.textContent = "";
  }
});
