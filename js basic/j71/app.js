var numbers = [19,20,32,45,33,46,78,97,23]

// اسپلایس همون حذف کردن اولیش ایندکس هست و دومیش تعداد
numbers.splice(2,1)
console.log(numbers)
// 67 , 69 به دوتای حذف شده اضافه میشه
numbers.splice(3,2,67,69)
console.log(numbers)