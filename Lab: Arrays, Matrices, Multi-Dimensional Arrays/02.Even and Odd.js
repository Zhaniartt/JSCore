function solve(arr){
let output = arr.filter((el,i)=>{
    return i%2 === 0
}).join(' ')
    console.log(output)
}
solve(['20', '30', '40'])