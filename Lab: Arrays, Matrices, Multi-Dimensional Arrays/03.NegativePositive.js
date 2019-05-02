function solve(input){
    let output  = input.filter(x=> x < 0).reverse()
    input = input.filter(x=> x>= 0)
   output = output.concat(input)
console.log(output.join('\n'))
}
solve([3, -2, 0, -1])