var users = [
    { id: 1 , name: "sajjad" , family:"kafshgar" , age : 18 , email:"sajjad.kafshgar123@gmail.com" },
    { id: 2 , name: "farid" , family:"kia" , age : 20 , email:"fff@gmail.com" },
    { id: 3 , name: "amir" , family:"saadati" , age : 25 , email:"aaa@gmail.com" }
]

users.forEach(function(user){
    console.log("name  : " + user.name +"\n" + "family : " + user.family)
})  