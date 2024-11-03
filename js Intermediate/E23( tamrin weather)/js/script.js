let citysData = {
    tehran: {city:"Tehran" , temp:12 , weather:'sunny' ,humidity:23 , windspeed: 32},
    shiraz: {city:"Shiraz" , temp:12 , weather:'sunny' ,humidity:23 , windspeed: 32},
    mashhade: {city:"mashhad" , temp:12 , weather:'sunny' ,humidity:23 , windspeed: 32},
    esfahan: {city:"Esfahan" , temp:12 , weather:'sunny' ,humidity:23 , windspeed: 32},
    babol: {city:"Babol" , temp:12 , weather:'ran' ,humidity:23 , windspeed: 32},
    sari: {city:"Sari" , temp:12 , weather:'sunny' ,humidity:23 , windspeed: 32},
}

let $ = document
let searchBtn = $.getElementById('search')
let searchbar = $.querySelector('.search-bar')

searchBtn.addEventListener('click' , function(){
    searchbarValue = searchbar.value
    mainCityDatas = citysData[searchbarValue]
    
    if (mainCityDatas) {
        $.querySelector('.weather').classList.remove('loading')
        $.querySelector('.city').innerHTML ='weather in' +mainCityDatas.city
        $.querySelector('.temp').innerHTML = mainCityDatas.temp + '°C'
        $.querySelector('.description').innerHTML = mainCityDatas.weather
        $.querySelector('.humidity').innerHTML = "Humidity: " + mainCityDatas.humidity + '%'
        $.querySelector('.wind').innerHTML = 'wind speed : ' + mainCityDatas.windspeed + 'km/h'
        
    } else {
        alert('کص کش مادر جنده ما همچین شهری نداریم اگرم داشته باشیم api نداریم پس اسم شهر های معروف رو بنویس سگ پدر')
    }
})