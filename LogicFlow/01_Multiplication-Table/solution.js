function solve() {
  let num1 = Number(document.getElementById('num1').value)
  let num2 = Number(document.getElementById('num2').value)

  let divResult =  document.querySelector('#result')
  
  function findWrongInput(num1,num2){
    if(num1 > num2){
      divResult.innerHTML = 'Try with other numbers.'
    }
  }
  function multiply(num1,num2){
    for(let i = num1; i <= num2;i++){
      let result = num2 * i;
      let p = document.createElement('p');
      p.innerHTML = `${i} * ${num2} = ${result}`
      divResult.appendChild(p)
    }
  }
  findWrongInput(num1,num2)
  multiply(num1,num2)
}