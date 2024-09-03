var usersdata = [
    { id:1 , name:"sajjad" , age:20},
    { id:2 , name:"ali" , age:13},
    { id:3 , name:"mamad" , age:15},
    { id:4 , name:"taghi" , age:25}
]
 var isInuser = usersdata.some(function (user){

    return user.name == "mamad"
 }) 
 console.log(isInuser)

 //فرق سام و اینکلود این هست که اینکلود برای ابجکت پشتیبانی نمیشه اما سامخ میتونه