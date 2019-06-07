function solve() {
    let cases = Array.from(document.querySelectorAll('button'));
    cases.forEach(x=> x.addEventListener('click',getInfo));
    let storage  = {};
    let backupStorage = [];
    let divS = document.querySelectorAll('section')[1].querySelectorAll('div');
    let counter = 1;

    function getInfo(){
        if(this.textContent === 'Add new truck'){
            addTruck();
             console.log(storage)

        }else if(this.textContent === 'Add new tires'){
           addTiresBackup();
           console.log(backupStorage)
        }else if(this.textContent === 'Go to work'){
           goToWork();
           console.log(storage);
           console.log(backupStorage)
        }else if(this.textContent === 'End of the shift'){
            let print = '';
            Object.entries(storage).forEach(x=>{
                print += `${x[0]} has traveled ${x[1].distance}\n`
            })
            print+= `You have ${backupStorage.length} sets of tires left.`
            document.querySelector('section textarea').textContent = print;
        }
    }
    function addTruck(){
        let plateNum = document.querySelector('#newTruckPlateNumber').value;
            let tiresCondition = document.querySelector('#newTruckTiresCondition').value;
          tiresCondition=  tiresCondition.split(' ').map(x=> Number(x));
            if(!storage.hasOwnProperty(plateNum)){
                storage[plateNum] = {
                    tiresNums: tiresCondition,
                    distance: 0
                };
                let div = document.createElement('div');
                div.textContent = plateNum;
                div.setAttribute('class','truck');
                divS[1].appendChild(div);
             }
    }
    function addTiresBackup(){
        let backupTires = document.querySelector('#newTiresCondition').value;
        backupStorage.push(backupTires.split(' ').map(x=> Number(x)));
        let div = document.createElement('div');
        div.textContent = backupTires;
        div.setAttribute('class','tireSet');
        divS[0].appendChild(div);
    }
function goToWork(){
    let workPlateNumber = document.querySelector('#workPlateNumber').value;
    let distance = document.querySelector('#distance').value;
    let tempDistance = +(distance / 1000);
    if(storage.hasOwnProperty(workPlateNumber)){
        let currentQuality = storage[workPlateNumber].tiresNums;
        if(currentQuality.every(x=> x >= tempDistance)){
         currentQuality = currentQuality.map(x=> x-tempDistance).join(' ');
            storage[workPlateNumber].tiresNums = currentQuality.split(' ').map(x=> Number(x));
          storage[workPlateNumber].distance += +distance;
        }else{
            for(let backup of backupStorage){
                if(backup.map(x=> Number(x)).every(x=> x >= tempDistance)){
                    if(counter > 1){
                        break;
                    }
                    let i =  Array.from(divS[0].querySelectorAll('div')).findIndex(el=> el.textContent === `${backup.join(' ')}`);
                    storage[workPlateNumber].distance += +distance;
                    let currentTier = backup.map(x => x -= tempDistance);
                    let index = backupStorage.indexOf(backup);
                   if(currentTier.every(x=> x > 0)){
                       backupStorage[index] = currentTier;
                        divS[0].querySelectorAll('div')[i].textContent = currentTier.join(' ');
                    }else{
                        backupStorage.splice(index,1);
                        divS[0].querySelectorAll('div')[i].textContent = '';
                    }
                    counter++;
                    break;
                }
            }
        }
       
    }
}
                

}