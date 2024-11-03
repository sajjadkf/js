let h1elem = document.querySelector('.titel')

h1elem.addEventListener('click', function(){

    // h1elem.setAttribute('class' , 'red')
    // h1elem.classList.add('red')
    // h1elem.classList.remove('font')

    h1elem.classList.toggle('red')
})