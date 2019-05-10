function solve() {
  let arr = JSON.parse(document.querySelector('#arr').value);
  let div = document.createElement('div')
  let div2 = document.createElement('div')
  function ascendenticOrder(arr){
    let a = arr.sort((a,b)=>{return a-b})
    div.textContent = a.join(', ')
    }
  function alphabeticalyOrder(arr){
    let a = arr.sort()
    div2.textContent = a.join(', ')
  }
ascendenticOrder(arr)
alphabeticalyOrder(arr)  
document.querySelector('#result').appendChild(div)
document.querySelector('#result').appendChild(div2)
}