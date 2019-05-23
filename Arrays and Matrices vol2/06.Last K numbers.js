function solve(n,k){
let firstElement = 1;
let output = []
for(let i = 1; i <= n;i++){
    output.push(firstElement)
    if(output.length <= k){

        firstElement = output.reduce((a,b)=> a+b)
    }else{
        firstElement = output.slice(output.length-k,output.length).reduce((a,b)=> a+b)
   }
}
console.log(output.join(' '))
}
solve(8,2)