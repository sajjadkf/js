var ToDolist = [
    {id: 1 , name: "exersise" , status: true },
    {id: 2 , name: "school" , status: false },
    {id: 3 , name: "docter" , status: true }
]

var menu = Number(prompt("1. اضافه کردن تودو" + "\n" +"2. حذف تودو" +"\n" +"3. انجام تودو (تغییر وضعیت)"))

if(isNaN(menu) === true){
    alert(" لطفا عدد وارد کنید")
}


if(menu == 1 ){
    var todoname  = prompt("لطفا نام لیست جدید را وارد کنید")
    var array = {
        id:4,
        name:todoname,
        status: true
    }
    ToDolist.push(array)

}else if(menu ==2){
    
}else if(menu ==3){

}else{

}