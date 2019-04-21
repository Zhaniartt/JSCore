function solve() {
	let mainMessage = document.querySelectorAll('#exercise textarea')
	let buttons = document.querySelectorAll('#exercise button')
	let encodeButton = buttons[0]
	let decodeButton = buttons[1]
	encodeButton.addEventListener('click',encode)
	decodeButton.addEventListener('click',decode)
	let currentMssg = ''
	function encode(){
		 currentMssg = mainMessage[0].value.split('').map(x=> x.charCodeAt(0))
										.map(x => x + 1)
										.map(x=>String.fromCharCode(x))
										.join("")
		mainMessage[0].value = ''
		mainMessage[1].value = currentMssg
	}
	function decode(){
		mainMessage[1].value = mainMessage[1].value.split('').map(x=> x.charCodeAt(0))
		.map(x => x - 1)
		.map(x=>String.fromCharCode(x))
		.join("")
	}
}
