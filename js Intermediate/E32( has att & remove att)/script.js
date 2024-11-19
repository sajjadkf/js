let  input = document.getElementById('input')

let hasInputAtt = input.hasAttribute('class')
console.log(hasInputAtt)

function removeAttrHandrl (){
    input.removeAttribute('class')
    console.log("taghi")
}