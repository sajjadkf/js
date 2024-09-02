var sum = 0
var productName = prompt("لطفا نام محصول را وارد کنید")

var product = [
    { name: "a15"},
    { name: "a13"},
    { name: "a35"},
    { name: "a55"},
    { name: "a23"},
    { name: "a22"}
]
var cart = [
    { name: "a15" , price: 1000},
    { name: "a13" , price: 2000},

]

var isinproduct = product.some(function(nam){
    return nam.name == productName
})

console.log(isinproduct)

if( isinproduct == true){
    cart.push({name:productName , price: 1000})
    for(i = 0 ; i<cart.length ; i++){
        sum = sum + cart[i].price
    }
    alert("محصول شما در فروشگاه مجود است")
    alert(sum)

}else{
    alert("اتمام موجودی ")
}