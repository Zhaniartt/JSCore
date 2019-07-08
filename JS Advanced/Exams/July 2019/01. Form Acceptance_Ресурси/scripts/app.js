function acceptance() {
	document.querySelector('#acceptance').addEventListener('click',collectWarehouse);
	function collectWarehouse(){
		let company = document.querySelector('input[name="shippingCompany"]').value;
		let product = document.querySelector('input[name="productName"]').value;
		let quantity = document.querySelector('input[name="productQuantity"]').value;
		let scrape = document.querySelector('input[name="productScrape"]').value;			
			if(company.match(/[A-Za-z]/) && product.match(/[A-Za-z]/g) && quantity.match(/[0-9]/g) && scrape.match(/[0-9]/g)){
				if(	quantity - scrape > 0){
					quantity -= scrape;
					let div = document.createElement('div');
					let p = document.createElement('p');
					p.textContent = `[${company}] ${product} - ${quantity} pieces`;
					div.appendChild(p);
					let button = document.createElement('button');
					button.setAttribute('type','button');
					button.textContent ='Out of stock';
					div.appendChild(button)
					document.querySelector('#warehouse').appendChild(div);
				
					document.querySelector('input[name="shippingCompany"]').value = '';
					document.querySelector('input[name="productName"]').value = '';
					document.querySelector('input[name="productQuantity"]').value = '';
					document.querySelector('input[name="productScrape"]').value = '';
				}
			}
		let outOfStock = Array.from(document.querySelectorAll('button'));
		outOfStock.forEach(x=> x.addEventListener('click',(e)=> {
			if(e.target.textContent === 'Out of stock'){
				let line = e.target.parentNode.remove();
			}
		
				
		}))
	}	
}
