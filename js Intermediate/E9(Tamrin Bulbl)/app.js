let bublimg = document.getElementById('bulb')
let btn = document.getElementById('btn')
let bublflag = false

function turnOnOFF (){
    if(bublflag){
        bublimg.setAttribute('src' , './bulboff.gif')
        btn.innerHTML= 'turn on'
        bublflag = false
    }else{
        bublimg.setAttribute('src' , './bulbon.gif')
        btn.innerHTML ='turn off'
        bublflag = true
    }
}