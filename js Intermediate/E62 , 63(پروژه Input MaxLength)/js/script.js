const inputElem = document.getElementById('input')
const Numberlength = document.querySelector('.counter')

inputElem.addEventListener('input' , function (){

    let inputLenght = inputElem.value.length
    let inputmaxlength = inputElem.getAttribute('maxlength')

    Numberlength.innerHTML = inputmaxlength - inputLenght
})

