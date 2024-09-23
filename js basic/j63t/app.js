var users = [
    { id: 1 , name: "sajjad" , family:"kafshgar" , age : 18 , email:"sajjad.kafshgar123@gmail.com" },
    { id: 2 , name: "farid" , family:"kia" , age : 20 , email:"fff@gmail.com" },
    { id: 3 , name: "amir" , family:"saadati" , age : 25 , email:"aaa@gmail.com" }
]

var username = prompt("please enter your name")
var userfamily = prompt("please enter your family")
var userage= Number(prompt("please enter your age "))
var useremail = prompt("please enter youremeil")

if(username.length<3 || username.length>10){
    alert("لطفا نام بیشتر از 3 کاراکتر و کمتر از 10 کاراکتر باشد")
}else if(userfamily.length<3 || userfamily.length>11){
    alert("لطفا فامیلپی بیشتر از 3 کاراکتر و کمتر از 10 کاراکتر باشد")
} else if (isNaN(userage)){
    alert("لطفا سن خود را درست وراد کنید")
} else {
    var user = {
        id: 4 , 
        name:username,
        family : userfamily,
        age:userage,
        email: useremail,
    }
    users.push(user)
    console.log(users)

}