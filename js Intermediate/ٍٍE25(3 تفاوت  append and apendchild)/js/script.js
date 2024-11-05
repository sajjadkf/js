let ulElem = document.querySelector('ul')

function addNewLi () {
  // console.log('Click')
  let newLiTag = document.createElement('li')
  newLiTag.innerHTML = 'Products'

  let secondLiElem = document.createElement('li')
  secondLiElem.innerHTML = 'Users'

  // ulElem.append('Products')
  // ulElem.appendChild('Products')

  // ulElem.append(newLiTag, secondLiElem)
  // ulElem.appendChild(newLiTag, secondLiElem)

  // let appendResult = ulElem.append(newLiTag)
  // let appendResult = ulElem.appendChild(newLiTag)


  console.log(appendResult)
}


//تفاوت های این دو چیست

// apend: string رو قبول 
//apentchild: string قبول نمیکند

//apend: بیش از دو تا تگ html قبول میکنه
//apendchild: فقط یک دونه قبول میکنه

//apend: اگر داخل یک تابع دیگه بریزی نمایش نمیده
//apendchild: اگر تو تابع بریزی نمایش میده

