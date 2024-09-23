var userbasket = [
    {id: 1 , name: "laptop" ,price: 5000000},
    {id: 2 , name: "phone" ,price: 3000000},
    {id: 3 , name: "milk" ,price: 35000},
    {id: 4 , name: "water" ,price: 6000},
    {id: 5 , name: "coolpad" ,price: 4000},
    {id: 6 , name: "pencil" ,price: 9000},
]

var filtterProduct = userbasket.filter(function(product){
    return product.price < 100000
})

var postcost = filtterProduct.length * 1000

sum = 0

userbasket.forEach(function(product){
    sum = sum + product.price
})

var totalprice = sum + postcost

console.log(totalprice)