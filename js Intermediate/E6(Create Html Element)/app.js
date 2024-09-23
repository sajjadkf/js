let username = prompt('please enter your name')

let newDivElement = document.createElement('div')

newDivElement.innerHTML = username

newDivElement.setAttribute( 'class', 'name')

newDivElement.setAttribute('id' , 'username')

newDivElement.style.color = 'green'

console.log(newDivElement)