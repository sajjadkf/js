// DOM

let h1element = document.getElementById('titel')

h1element.setAttribute('class' , 'taghi')

let liItem = document.getElementsByClassName('list-item')

console.log(h1element)
console.log(h1element.getAttribute('class'))


console.log(liItem[1].setAttribute('id' , 'naghi'))