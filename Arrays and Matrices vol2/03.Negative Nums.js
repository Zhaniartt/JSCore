function solve(arr){
    let negative = arr.filter(x=> x < 0).reverse()
    let positive = arr.filter(x=> x >= 0)
    let output = negative.concat(positive)
    return output.join('\n')  
}
solve([3, -2, 0, -1])