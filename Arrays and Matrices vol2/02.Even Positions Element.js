function solve(arr){
let output = []
   arr.filter((a,i)=>{ if(i % 2 === 0){ output.push(a)} })
   return output.join(' ')
}
console.log(solve(['20', '30', '40' , '32' , '41']))