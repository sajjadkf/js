let body = document.getElementById('body')
let contextMenu = document.getElementById('contextMenu')

body.addEventListener('contextmenu' , function (event){
    event.preventDefault()
    console.log(event)

    if(contextMenu.style.display === 'none'){
        contextMenu.style.display = 'block'

        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }else{
        contextMenu.style.display === 'none'
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }
    
})


body.addEventListener('click' , function(){
    contextMenu.style.display = 'none'
})

body.addEventListener('keypress' , function (event){
    if(event.keyCode === 13 || event.keyCode === 32){
        contextMenu.style.display = 'none'
    }
})