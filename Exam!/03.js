function spaceshipCrafting() {
    let titaniumCore = 467.5;
    let aluminiumCore = 1265;
    let magnesiumCore = 1815;
    let carbonCore = 1650
    let lossesPercent = 40
let percent = ((lossesPercent / 4) / 100);
let sumForTitanium = (titaniumCore-  titaniumCore * percent) / 25;
let sumForaluminium = (aluminiumCore - aluminiumCore * percent) / 50;
let sumForMagnesium = (magnesiumCore - magnesiumCore * percent) / 75;
let sumForCarbon = (carbonCore - carbonCore * percent) / 100;
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
    if(sumForTitanium - 7 >= 0){
        if(sumForaluminium - 9 >= 0){
            if(sumForMagnesium - 7 >=0){
                if(sumForCarbon - 7 >=0){
                    sumForTitanium = Math.round(sumForTitanium - 7);
                    sumForaluminium = Math.round(sumForaluminium - 9);
                    sumForMagnesium = Math.round(sumForMagnesium - 7);
                    sumForCarbon = Math.round(sumForCarbon - 7);
                    ships['THE-UNDEFINED-SHIP']++;
                }
            }
        }
    }
    
    if(sumForTitanium - 5 >= 0){
        if(sumForaluminium - 7 >= 0){
            if(sumForMagnesium - 7 >=0){
                if(sumForCarbon - 5 >=0){
            sumForTitanium = Math.round(sumForTitanium - 5);
            sumForaluminium = Math.round(sumForaluminium - 7);
            sumForMagnesium = Math.round(sumForMagnesium - 7);
            sumForCarbon = Math.round(sumForCarbon -5);
                    ships['NULL-MASTER']++;
                }
            }
        }
    }
    
    if(sumForTitanium - 3 >= 0){
        if(sumForaluminium - 5 >= 0){
            if(sumForMagnesium - 5 >=0){
                if(sumForCarbon - 2 >=0){
            sumForTitanium = Math.round(sumForTitanium - 3);
            sumForaluminium = Math.round(sumForaluminium - 5);
            sumForMagnesium = Math.round(sumForMagnesium - 5);
            sumForCarbon = Math.round(sumForCarbon - 2);
                    ships['JSON-CREW']++;
                }
            }
        }
    }
    
    if(sumForTitanium - 2 >= 0){
        if(sumForaluminium - 2 >= 0){
            if(sumForMagnesium - 3 >=0){
                if(sumForCarbon - 1 >=0){
                    sumForTitanium = Math.round(sumForTitanium - 2);
                    sumForaluminium = Math.round(sumForaluminium - 2);
                    sumForMagnesium = Math.round(sumForMagnesium - 3);
                    sumForCarbon = Math.round(sumForCarbon - 1);
                    ships['FALSE-FLEET']++;
                }
            }
        }
    }
   
}

}
spaceshipCrafting();