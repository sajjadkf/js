let btn = document.getElementById('btn')
let input = document.getElementById('input')

btn.addEventListener('click' , function(event){
    console.log(event)
})

input.addEventListener('keypress' , function(event){
    // console.log(event)
    if(event.key === 'Enter'){
        console.log('kos nsnat')
    }
})