//1. عددی رو از کاربر گرفته و مجموع ارقام آن را حساب کنید
// 2. عددی را از کاربر گرفته و تعداد ارقام آن را نمایش دهید

var username = Number(prompt("لطفا عدد مورد نظر را ,وارد کنید"))
var sum = 0
var result = 0

while( username/10 != 0 ){
    baghi = username%10
    sum = sum + baghi
    username = Math.floor(username/10)
    result++
}

alert(sum + "\n" + result) 

//-----------------------------------------------------------------
