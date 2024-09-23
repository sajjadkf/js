// میانگین عدد به تعدادی که کاربذ براتون نوشته محاسبه کنید
 
var usernumber = 0
var counter = 0
var sum = 0

while(usernumber !=-1){
    sum = sum + usernumber
    usernumber = Number(prompt("please enter number" +"\n" + "to break enter -1"))
    if(usernumber !=-1){
        counter++
    }
}

alert("avarege : " + sum/counter)








