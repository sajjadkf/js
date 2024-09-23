var agenumber = Number(prompt("لطفا سن خود را وارد کنید ", 0))
var gen = (prompt("جنسیت خود را وارد کنید"))


if( gen == "زن" ||agenumber<18){
    alert("شما مجاز به ورود نیستید")
} else {
    alert("میتوانید وارد شوید")
}