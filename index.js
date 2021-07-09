const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

 // Show input error message
const showError = (input, message) => {
const formControl = input.parentElement;
formControl.className = "form-control error";
const small = formControl.querySelector("small");
small.innerText = message;
}

// Show Success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

}

// Event listener
form.addEventListener("submit", (e)=> {
  e.preventDefault();

  if (username.value === '') {
    showError(username, "Username is required")
  } else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, "Email is required")
  } else {
    showSuccess(email)
  }


  if (password.value === '') {
    showError(password, "Password is required")
  } else {
    showSuccess(password)
  }

  if (confirmPassword.value === '') {
    showError(confirmPassword, "Confirm Password is required")
  } else {
    showSuccess(confirmPassword)
  }

} )
