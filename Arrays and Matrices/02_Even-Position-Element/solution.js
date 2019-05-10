function solve() {
  let arr = document.querySelector('#arr').value
  arr = arr.split(',').map(x=> Number(x))
  let output = []
  for(let i = 0; i < arr.length; i++){
      if(i % 2 === 0){
        output.push(arr[i])
      }
  }
  document.querySelector('#result').textContent = output.join(' x ')
}