let usernameMassage = document.querySelector('.username-validation')
let passwordMassage = document.querySelector('.password-validation')

let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')


function usernameValidation () {
    if (usernameInput.value.length < 12) {
        usernameMassage.style.coler = 'red'
        usernameMassage.innerHTML = 'must contain 12 character'
        usernameMassage.style.display = 'block'
        
    }else{
        usernameMassage.style.coler = 'green'
        usernameMassage.innerHTML = 'correct username value'
    }
}
function passwordValidation () {
    if (passwordInput.value.length < 8 ) {
        passwordMassage.style.coler = 'red'
        passwordMassage.innerHTML = 'must contain 8 character'
        passwordMassage.style.display = 'block'
        
    }else{
        passwordMassage.style.coler = 'green'
        passwordMassage.innerHTML = 'correct password value'
    }
}
