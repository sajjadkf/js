var prices = 0

for(i=1 ; i<6 ;i++){
    var Production = Number(prompt(("بگین" + i + "لطفا قیمت محصول")))
    var prices = prices + Production
}
if (i=5) {
    alert("قیمت مجموع خرید" + prices)
}

//-----------------------------------------------------------------------حل استاد

var allPrices = 0

for (var i = 0 ; i < 5 ; i++) {
    
	allPrices = allPrices + Number(prompt("Enter the product price: "))
}

alert("All price of your basket: " + allPrices)