//برنامه ای بنویسد که عددرو دریافت کرده و جمع ارقام ان را بهت بده مثلا 142 میشه 7 خااا

var usernumber = Number(prompt("please enter number", 0))
var sum = 0

for( i=0 ; (usernumber/10 != 0) ;i++){
    var baghi = usernumber%10
    sum = sum + baghi
    usernumber = Math.floor(usernumber/10)
}

alert("result :" + sum)