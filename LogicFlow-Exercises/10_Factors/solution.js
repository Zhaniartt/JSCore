function solve() {
   let number = Number(document.querySelector('#num').value)
   const factors = number => Array
    .from(Array(number), (_, i) => i)
    .filter(i => number % i === 0)
    let result = [...factors(number)].join(' ') + ' ' + number
    document.querySelector('#result').textContent = result
}