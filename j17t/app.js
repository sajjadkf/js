var birthdayyear = Number(prompt("سال تولد خود را وارد کنید" , 0))

var age = (1403 - birthdayyear)
 if (isNaN(birthdayyear)){
    alert("کص کش عدد وارد کن")
 }else{
    alert(age)
 }