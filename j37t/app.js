var username = prompt("لطفا نام کاربری خود را وارد کنید")
var password = prompt("لطفا پسورد خود را وارد کنید")

var username = username.length
var password = password.length


function checkuser (username , password){
        if (username<3){
            alert("نام کاربری باید بیشتر از 3 کارکتر باشد")
        }
        if (password < 8) {
            alert("پسوورد باید بیشتر از 8 کارکتر باشد")
        }
        if( username > 3 && password >8){
            alert("شما وارد شدید")
        }else{
            alert("لطفا نام کاربری یا پسورد را درست وارد کنید")
        }

}

checkuser(username , password)