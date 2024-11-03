let $=document

let usernameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')

let usernameMassage = $.querySelector('.username-validation')
let passwordMassage = $.querySelector('.password-validation')

function usernameValidation (){
    if(usernameInput.value.length <12){
        usernameMassage.innerHTML = 'باید بیشتر از 12 کارکتر باشد'
        usernameMassage.style.coler = 'red'
        usernameMassage.style.display = 'block'
    }else{
        usernameMassage.innerHTML = 'درست هست'
        usernameMassage.style.coler = 'green'
    }
}

function passwordValidation (){
    if(passwordInput.value.length <8){
        passwordMassage.innerHTML = 'باید بیشتر از 8 کارکتر باشد'
        passwordMassage.style.coler = 'red'
        passwordMassage.style.display = 'block'
    }else{
        passwordMassage.innerHTML = 'درست هست'
        passwordMassage.style.coler = 'green'
    }
}
