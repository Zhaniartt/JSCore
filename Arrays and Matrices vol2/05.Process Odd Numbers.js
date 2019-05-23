function solve(arr){
    let output = []
    arr.filter((x,i)=>{
        if(i% 2 === 1){
            output.push(x)
        }
    })
    output = output.map(x=> x*2).reverse()
    console.log(output.join(' '))
}
solve([3, 0, 10, 4, 7, 3])