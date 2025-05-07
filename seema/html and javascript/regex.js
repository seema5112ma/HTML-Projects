document.getElementById("forms").addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventdefault();

  // Clear any previous error messages
  document.getElementById("errorMessages").innerHTML = "";
  // Get form values
  var username = document.signupForm.username.value;
  var email = document.signupForm.email.value;
  var password = document.signupForm.password.value;
  var confirmPassword = document.signupForm.confirmPassword.value;
  var errors = [];
  // Check if username is empty
  if (username === "") {
    errors.push("Username is required.");
  }
  // Check if email is valid
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (email === "") {
    errors.push("Email is required.");
  } else if (!email.match(emailPattern)) {
    errors.push("Please enter a valid email address.");
  }
  // Check if password is empty
  if (password === "") {
    errors.push("Password is required.");
  }
  // Check if passwords match
  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }
  // If there are errors, display them and prevent form submission
  if (errors.length > 0) {
    document.getElementById("errorMessages").innerHTML = errors.join("<br>");
    return false;
    // Prevent form submission
  }
  // If no errors, allow form submission
  return true;
}
