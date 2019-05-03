function solve() {
  let string = document.querySelector('#string').value
  let character = document.querySelector('#character').value
  let divResult = document.querySelector('#result')
      let result = string.toLowerCase().split('').filter(x=> x===character)
       let length = result.length;

      function getOddorEven(length){
         if(length % 2 === 0){
          divResult.textContent = `Count of ${character} is even.`
        }else{
          divResult.textContent = `Count of ${character} is odd.`
        }
      }
      getOddorEven(length)
      
}