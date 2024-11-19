let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')

let keycode = $.getElementById('keyCode')
let eventKey = $.getElementById('key')
let eventLocatin = $.getElementById('location')
let eventWhich = $.getElementById('which')
let eventCode = $.getElementById('code')

document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	event.preventDefault()
	console.log(event)

	keycode.innerHTML = event.which
	eventKey.innerHTML = event.key
	eventLocatin.innerHTML = event.location
	eventWhich.innerHTML = event.which
	eventCode.innerHTML = event.code8

})

