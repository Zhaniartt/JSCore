function solve() {
    let degrees = Number(document.querySelector('#num1').value)
    let type = document.querySelector('#type').value
    let divResult = document.querySelector('#result')
  function getResult(degrees,type){
    type = type.toLowerCase()
    let result = '';
       if(degrees === Number(degrees)){
        if(type === 'fahrenheit'){
           result = Math.round((degrees-32)*.5556)
        }else if(type === 'celsius'){
          result = Math.round(degrees * 9/5 + 32)
        }else{
          result = 'Error!'
        }
      }else{
        result = 'Error!'
      }
      divResult.innerHTML = result
  }
  divResult.innerHTML = ''
  getResult(degrees,type)

}