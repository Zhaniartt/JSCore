function solve(arr){
    let k = arr.shift()
   
let firstK = arr.slice(0,k)
let secondK = arr.slice(arr.length - k ,arr.length)      
    firstK
    secondK
    console.log(`${firstK.join(' ')}\n${secondK.join(' ')}`)
}
solve([4,
    6, 7, 8, 9,2])