var userNumbers = []
var usernumber = 0
var sum = 0

while(usernumber !=-1 ){
    usernumber = Number(prompt("enter your number " + "\n" + "break enter -1"))
    if(usernumber !=-1){
        userNumbers.push(usernumber)
    }
}

for( i = 0 ; i< userNumbers.length ; i++ ){
    sum = sum + userNumbers[i]
}

console.log(userNumbers)
console.log("average" , sum/userNumbers.length)