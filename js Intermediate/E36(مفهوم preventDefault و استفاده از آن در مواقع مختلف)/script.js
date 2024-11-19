let form = document.getElementById('formLogin')
let usernameInput = document.getElementById('username')

form.addEventListener('submit' , function(event){
    event.preventDefault()
    console.log(event)
})

usernameInput.addEventListener('keydown' , function(event){
    event.preventDefault()
    console.log(event)
})