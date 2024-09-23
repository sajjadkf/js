var number = Number(number)

function zojfard (number){
    if (number%2 == 0){
        alert("عدد شما زوج است")
    }else{
        alert("عدد شما فرد است")
    }
}

zojfard(prompt("لطفا عدد را وارد"))