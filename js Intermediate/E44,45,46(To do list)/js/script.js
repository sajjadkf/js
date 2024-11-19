let $ = document
let inputElem = $.querySelector('input')
let addTodoform = $.querySelector('.add')
let list = $.querySelector('ul')
let deleteallicon = $.querySelector('.delete')




function addnewtodo (newTodoValue){
    let newTodoLi = $.createElement('li')
    newTodoLi.classList = 'list-group-item d-flex justify-content-between align-items-center'

    let newTodospan = $.createElement('span')
    newTodospan.innerHTML = newTodoValue

    let deleteIcon = $.createElement('i')
    deleteIcon.classList = 'fa fa-trash-o delete'

    deleteIcon.addEventListener("click", function (event){
        event.target.parentElement.remove()
    })

    newTodoLi.append(newTodospan)
    newTodoLi.append(deleteIcon)
    list.append(newTodoLi)

    // console.log(newTodoLi)
}

addTodoform.addEventListener('submit' ,function(event){
    event.preventDefault()
} )

inputElem.addEventListener('keydown' , function (event){
    let newTodoValue = event.target.value.trim()

    // console.log(newTodoValue)

    if(event.keyCode === 13){
        if(newTodoValue){
            inputElem.value = ''
            addnewtodo(newTodoValue)
        }
    }

})