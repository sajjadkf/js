//دو عدد رو از کاربر بگیرین و اعداد زوج بین آن ها را نمایش دهید

var num1 = Number(prompt("لطفا عدد اول را وارد کنید"))
var num2 = Number(prompt("لطفا عدد دوم را وارد کنید"))
var i = num1
while(i < num2 ){
    if(i%2 == 0)(
        console.log(i)
    )
    i++
}

//------------------------کد استاد
// var userFirstNumber = Number(prompt("Enter The First Number: ", 0));
// var userSecondNumber = Number(prompt("Enter The Second Number: ", 0));


// if (userFirstNumber % 2 === 0) {
//   while (userFirstNumber < userSecondNumber) {
//     console.log(userFirstNumber);
//     userFirstNumber += 2;
//   }
// } else {
//   userFirstNumber++;
//   while (userFirstNumber < userSecondNumber) {
//     console.log(userFirstNumber);
//     userFirstNumber += 2;
//   }
// }


