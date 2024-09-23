var name = String(prompt('please enter name '))
var lowername = name.toLowerCase()


var arrayname = lowername.split('')
var arraynameReverse = arrayname.reverse().join('')

console.log(arraynameReverse)

if(lowername === arraynameReverse){
    alert("برعکسشون برابر هست")
}else{
    alert("برعکشون برابر نیست")
}
