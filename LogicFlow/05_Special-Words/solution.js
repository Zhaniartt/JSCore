function solve() {
    let firstNumber = Number(document.querySelector('#firstNumber').value)
    let secondNumber = Number(document.querySelector('#secondNumber').value)
    let firstString = (document.querySelector('#firstString').value)
    let secondString = (document.querySelector('#secondString').value)
    let thirdString = (document.querySelector('#thirdString').value)
  let divResult = document.querySelector('#result')

  function getParameters(i){
    if (i % 3 === 0 && i % 5 === 0){
        let p = document.createElement('p')
       p.innerHTML +=`${i} ${firstString}-${secondString}-${thirdString}`
       divResult.appendChild(p)
      }
      else if(i % 3 === 0){
        let p = document.createElement('p')
        p.innerHTML +=`${i} ${secondString}`
        divResult.appendChild(p)
      }
      else if(i % 5 === 0){
        let p = document.createElement('p')
       p.innerHTML +=`${i} ${thirdString}`
       divResult.appendChild(p)
      }else{
        let p = document.createElement('p')
          p.innerHTML = i;
          divResult.appendChild(p)
      }
    
  }
  for(let i = firstNumber; i <= secondNumber;i++){
    getParameters(i)
  }

}
    
