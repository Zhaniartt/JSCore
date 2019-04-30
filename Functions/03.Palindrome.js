function solve(input){
    let reversed = input.split('').reverse().join('')
if (reversed === input){
    return 'true'
}else{
    return 'false'
}
    
}
console.log(solve('racecar'))