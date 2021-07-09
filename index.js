const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

 // Show input error message
const showError = (input, message) => {
const formControl = input.parentElement
formControl.className = "form-control error"
const small = formControl.querySelector("small")
small.innerText = message
}

// Show Success outline
const showSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = "form-control success"

}

// Email Validate
const isValideEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase())
}

// Check required fields
const checkRequired = (inputArr) => {
inputArr.forEach((input, i) => {
if(input.value.trim() === "") {
  showError(input, `${getFieldName(input)} is required`)
} else {
  showSuccess(input)
}
})
}

// Get fieldname
const getFieldName = (input) => {
return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listener
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  checkRequired([username, email, password, confirmPassword])
//  if (username.value === '') {
//    showError(username, "Username is required")
//  } else {
//    showSuccess(username)
//  }
//
//  if (email.value === '') {
//    showError(email, "Email is required")
//  } else if(!isValideEmail(email.value)) {
//    showError(email, "Email is not valid")
//  } else {
//    showSuccess(email)
//  }
//
//
//  if (password.value === '') {
//    showError(password, "Password is required")
//  } else {
//    showSuccess(password)
//  }
//
//  if (confirmPassword.value === '') {
//    showError(confirmPassword, "Confirm Password is required")
//  } else {
//    showSuccess(confirmPassword)
//  }
} )
