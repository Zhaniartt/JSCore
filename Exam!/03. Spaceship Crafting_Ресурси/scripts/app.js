function spaceshipCrafting() {
		let titaniumCore = document.querySelector('#titaniumCoreFound').value;
		let aluminiumCore = document.querySelector('#aluminiumCoreFound').value;
		let magnesiumCore = document.querySelector('#magnesiumCoreFound').value;
		let carbonCore = document.querySelector('#carbonCoreFound').value;
		let lossesPercent = document.querySelector('#lossesPercent').value;
let percent = (lossesPercent / 4);
percent = (100 - percent) / 100;
let sumForTitanium = Math.round((titaniumCore * percent) / 25);
let sumForaluminium = Math.round((aluminiumCore * percent) / 50);
let sumForMagnesium = Math.round((magnesiumCore * percent) / 75);
let sumForCarbon = Math.round((carbonCore * percent) / 100);

		let ships = {
			'THE-UNDEFINED-SHIP' : 0,
			'NULL-MASTER':0,
			'JSON-CREW':0,
			'FALSE-FLEET':0
		}
		
		for(let i = sumForTitanium; i >= 0; i--){
			if(sumForTitanium <= 0 || sumForCarbon <= 0 || sumForMagnesium <= 0 || sumForaluminium <= 0){
				break;
			}
			if(sumForTitanium >= 7 && sumForaluminium >= 9 && sumForMagnesium >= 7 && sumForCarbon >= 7 ){
							sumForTitanium =sumForTitanium - 7;
							sumForaluminium = sumForaluminium - 9;
							sumForMagnesium = sumForMagnesium - 7;
							sumForCarbon =sumForCarbon - 7;
							ships['THE-UNDEFINED-SHIP']+=1;
				
			}
			
			if(sumForTitanium >= 5 && sumForaluminium  >= 7 && sumForMagnesium  >=7 && sumForCarbon >= 5){
					sumForTitanium = sumForTitanium - 5;
					sumForaluminium = sumForaluminium - 7;
					sumForMagnesium = sumForMagnesium - 7;
					sumForCarbon = sumForCarbon -5;
							ships['NULL-MASTER']+=1;
						
					
				
			}
			
			if(sumForTitanium  >= 3){
				if(sumForaluminium  >= 5){
					if(sumForMagnesium >=5){
						if(sumForCarbon >=2){
					sumForTitanium = sumForTitanium - 3;
					sumForaluminium = sumForaluminium - 5;
					sumForMagnesium = sumForMagnesium - 5;
					sumForCarbon =sumForCarbon - 2;
							ships['JSON-CREW']+=1;
						}
					}
				}
			}
			
			if(sumForTitanium >= 2){
				if(sumForaluminium  >= 2){
					if(sumForMagnesium  >=3){
						if(sumForCarbon  >=1){
							sumForTitanium = sumForTitanium - 2;
							sumForaluminium = sumForaluminium - 2;
							sumForMagnesium = sumForMagnesium - 3;
							sumForCarbon = sumForCarbon - 1;
							ships['FALSE-FLEET']+=1;
						}
					}
				}
			}
		   
		}
		let sorted = Object.entries(ships).filter(x=> x[1] > 0);
		let spaceShips = document.querySelector('#builtSpaceships p');
		let p = []
		Object.values(sorted).forEach(x=> {
            let name = x[0]
            let value = x[1]
            p.push(`${value} ${name}`);
		
		});

		spaceShips.textContent  = p.join(', ');
		let availableBars=  document.querySelector('#availableBars p');
		availableBars.textContent = `${sumForTitanium} titanium bars, ${sumForaluminium} aluminum bars, ${sumForMagnesium} magnesium bars, ${sumForCarbon} carbon bars`
		
}