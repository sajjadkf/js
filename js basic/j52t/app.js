//برنامه ای بنویسد که عددی را دزیافت و تعداد ارثام را به شما نشان دهد

var usernumber = Number(prompt("please ente number" , 0))
sum = 0
for(i=0 ;usernumber/10 != 0 ; i++){
   usernumber = Math.floor(usernumber/10)
}
alert(i)