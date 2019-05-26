function solve() {
    let input = document.querySelector('#input').value;
    let result = document.querySelector('#resultOutput')

    input = input.split('').map(x=> Number(x))
    let reduceSum = String(input.reduce((a,b)=> a+b))
    let i =  reduceSum
    while (i > 9) {
        i = i
          .toString()
          .split('')
          .map(Number)
          .reduce((a, b) => a + b, 0)
      }
    
   input =  input.slice(i,input.length)
   input = input.slice(0,input.length-i)
   input = input.join('').match(new RegExp(`.{1,8}`,'g'))
   let forAscii = []
   input.forEach(x=> {
    let digit = parseInt(x, 2)
    forAscii.push(digit)
   })
   let word = forAscii.map(x=> String.fromCharCode(x)) .filter(x => /[A-Za-z\s]/.test(x)).join('')
   result.textContent = word;
}