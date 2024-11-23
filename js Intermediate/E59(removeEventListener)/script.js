const box = document.querySelector('.box')
const btnRemoveMouse = document.querySelector('.btn')

function MouseMoveHAndeler () {
    console.log('mouse move :)')
}

function RemoveHandeler() {
    box.removeEventListener('mousemove' , MouseMoveHAndeler)
}


box.addEventListener('mousemove' , MouseMoveHAndeler)
btnRemoveMouse.addEventListener('click' , RemoveHandeler)

