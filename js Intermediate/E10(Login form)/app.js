let username = document.querySelector('.username')
let password = document.querySelector('.password')
let modal = document.querySelector('.modal')


function dataValidation (){
    
    let usernamevalue = username.value
    let passwordvalue = password.value

    console.log(usernamevalue)

    if (usernamevalue.lenght < 12 || passwordvalue.lenght <8) {
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    } else {
        modal.style.background = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline'   
    }
    setTimeout(function () {
        modal.style.display = 'none'
    }, 3000)
}