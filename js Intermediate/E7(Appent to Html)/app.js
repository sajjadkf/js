let ulElement =document.querySelector('ul')

let listItem1 = document.createElement('li')
listItem1.innerHTML = 'sajjad'

let listitem2 = document.createElement('li')
listitem2.innerHTML = 'taghi'

// ulElement.append(listItem1)
// ulElement.append(listitem2)

ulElement.appendChild(listItem1)
ulElement.appendChild(listitem2)

console.log(ulElement)
