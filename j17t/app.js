// برنامه ای بنویسد که سنتون رو بر اساس سال تولدتون نشان دهدو اگر که عدد داخلش نزد بهش ارور بده

var birthdayyear = Number(prompt("سال تولد خود را وارد کنید" , 0))

var age = (1403 - birthdayyear)
 if (isNaN(birthdayyear)){
    alert("کص کش عدد وارد کن")
 }else{
    alert(age)
 } 