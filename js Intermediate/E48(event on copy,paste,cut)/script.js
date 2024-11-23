let editorElem = document.getElementById('editor')

function copyHandeler (event) {
    event.preventDifault()
    console.log('copy' , event)
}

function cutHandeler (event) {
    event.preventDefault()
    console.log('cut' , event)
}

function pasteHandeler (event) {
    event.preventDefault()
    console.log('paste' , event)
}

editorElem.addEventListener('copy' , copyHandeler )
editorElem.addEventListener('cut' , cutHandeler )
editorElem.addEventListener('paste' , pasteHandeler )

