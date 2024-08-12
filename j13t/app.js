//لطفا برنامه ای بنویسید که عدد زوج یا فرد را مشخص کنید

var num = prompt("لطفا عدد خود را وارد کنید")
var num = Number(num)

if(num%2 == 0){
    alert("زوج است")
} else {
    alert("فرد است")
}
