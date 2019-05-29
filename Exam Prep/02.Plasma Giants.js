function solve(params,cutNum) {
    let res1 = [];
    let res2 = [];
        let firstGiant = params.slice(0,params.length/2)
        let secondGiant = params.slice(params.length/2 ,params.length)
        let firstSum = []
        let secondSum = []
        if(cutNum !== 0){
            while (firstGiant.length) {
                res1.push(firstGiant.splice(0, cutNum));
              }
              while (secondGiant.length) {
                  res2.push(secondGiant.splice(0, cutNum));
              }
             
           res1.forEach(x=> {
               x = x.reduce((a,b)=> a*b)
               firstSum.push(x)
           })   
           res2 = res2.forEach(x=> {
               x = x.reduce((a,b)=> a*b)
               secondSum.push(x)
           })
           firstSum = firstSum.reduce((a,b)=> a+b)
           secondSum = secondSum.reduce((a,b)=> a+b)
        }else{
            firstSum = firstGiant.reduce((a,b)=> a+b)
            secondSum = secondGiant.reduce((a,b)=> a+b)
        }
       
       
    let damage = params.sort((a,b)=> a-b)[0]
    let fightStopValue = params.sort((a,b)=> b-a)[0]
    let counter = 1
    if(damage !== 0){
        while(true){
            if(firstSum <= fightStopValue || secondSum <= fightStopValue){
                break;
            }
            firstSum -= damage
            secondSum -= damage
            counter++
        }
    }
  
    if(firstSum > secondSum){
        console.log(`First Giant defeated Second Giant with result ${firstSum} - ${secondSum} in ${counter} rounds`)
    }else if(firstSum < secondSum){
        console.log(`Second Giant defeated First Giant with result ${secondSum} - ${firstSum} in ${counter} rounds`)
    }else {
        console.log(`Its a draw ${firstSum} - ${secondSum}`)
    }
}
solve([0, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 0)