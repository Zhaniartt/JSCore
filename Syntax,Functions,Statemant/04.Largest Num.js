function solve(num1,num2,num3){
    let arr = [num1,num2,num3].sort((a,b)=> b-a)
    console.log(`The largest number is ${arr[0]}.`)
}
solve(-3, -5, -22.5)