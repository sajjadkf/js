// var username = [
//     "sajjad",
//     "ali",
//     "hossein",
//     "taghi"
// ]

// console.log(username.includes("sajjad"))

var username = prompt("please enter your name")
var names = [
    "sajjad",
    "ali",
    "hossein",
    "taghi"
]
if(names.includes(username) == true){
    alert("وارد شوید" + username)
}else{
    alert("برو ثبت نام کن گی خار")
}