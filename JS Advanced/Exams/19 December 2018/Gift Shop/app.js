function solution() {
	let button = document.querySelector('button');
	button.addEventListener('click',getReady);
	let toyType = document.querySelector('#toyType');
	let toyPrice = document.querySelector('#toyPrice');
	let toyDescrp = document.querySelector('#toyDescription');
	function getReady(){
		if(toyType.value !== '' && !isNaN(+toyPrice.value) && toyDescrp.value.length >=50){

				
				let giftScope = document.querySelector('#christmasGiftShop');
				let theGift = document.createElement('div');
				theGift.setAttribute('class','gift');
				let img = document.createElement('img');
				img.setAttribute('src','gift.png');
				let h2 = document.createElement('h2');
				h2.textContent = toyType.value;
				let p = document.createElement('p');
				p.textContent = toyDescrp.value;
				let button = document.createElement('button');
				button.textContent = `Buy it for $${toyPrice.value}`
				theGift.appendChild(img);
				theGift.appendChild(h2);
				theGift.appendChild(p);
				theGift.appendChild(button);
				giftScope.appendChild(theGift);
				document.querySelector('.gift button').addEventListener('click',(e)=>{
					e.target.parentNode.remove();
				});
			}
				toyType.value = '';
   			 toyPrice.value = ''
   				 toyDescrp.value = ''
		}
}