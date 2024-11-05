let $=document

const firstValue = $.querySelector('.C')
const seccondValue = $.querySelector('.F')
const conventer = $.querySelector('#converter')
const result = $.querySelector('.result')
const convertBtn =  $.querySelector('.convertButton')
const resettBtn = $.querySelector('.resetButton')
const changeBtn = $.querySelector('.changeButton')

function convert () {
if (isNaN(conventer.value) || conventer.value === '') {
    result.innerHTML = 'لطفا عدد وارد کنید'
    result.style.color = 'red'
} else {
    if (firstValue.innerHTML === '°C') {
        let NumberConventer = conventer.value
        result.innerHTML = NumberConventer *1.8 +32
         result.style.color = 'yellow'

        
    } else {
        let NumberConventer = conventer.value
        result.innerHTML = ((NumberConventer - 32) * 5) / 9
         result.style.color = 'yellow'
    }
}
}

function reset () {
 result.innerHTML = ''
 converter.value = ''
}

function swap () {
if (firstValue.innerHTML === '°C') {
    
    firstValue.innerHTML = '°F'
    seccondValue.innerHTML = '°C'
    conventer.setAttribute('placeholder' , '°F')
    document.titel = 'sabzlearn js °F to °C'
    
} else {
    firstValue.innerHTML = '°C'
    seccondValue.innerHTML = '°F'
    conventer.setAttribute('placeholder' , '°C')
    document.title = 'sabzlearn js °C to °F'
}
}

convertBtn.addEventListener('click' , convert)
resettBtn.addEventListener('click' , reset)
changeBtn.addEventListener('click' , swap)
