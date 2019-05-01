function solve(input){
 let number = +input[0]

 let cases = {
     dice: (num) => Math.sqrt(num),
     spice: (num) => num += 1,
     chop: (num) => num / 2,
     bake: (num) => num * 3,
    fillet: (num) => num -= num * 0.2
 }
 for(let i = 1; i < input.length ; i++){
     let currentOp = input[i]
    number = cases[currentOp](number)
    console.log(number)

 }
}
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])