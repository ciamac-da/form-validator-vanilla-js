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
const checkEmail = (input) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(input.value.trim())) {
      showSuccess(input)
    } else {
      showError(input, "Email is not valid")
    }
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

// Check input length
const checkLength = (input, min, max) => {
 if(input.value.length < min) {
   showError(input, `${getFieldName(input)} must be at least ${min} characters`)
 }else if(input.value.length > max) {
   showError(input, `${getFieldName(input)} must be less than ${max} characters`)
 }else {
   showSuccess(input)
 }
}

// Check passwords match
const checkPasswordsMatch = (input1, input2) => {
 if(input1.value !== input2.value){
  showError(input2, "Passwords do not match")
 }
}

// Get fieldname
const getFieldName = (input) => {
return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listener
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  checkRequired([username, email, password, confirmPassword])
  checkLength(username, 3,15)
  checkLength(password, 8,25)
  checkEmail(email)
  checkPasswordsMatch(password, confirmPassword)
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
