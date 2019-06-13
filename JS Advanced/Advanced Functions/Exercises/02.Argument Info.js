function solve(){
    let output = {}
    for(let arg of arguments){
        console.log(`${typeof arg}: ${arg}`)
        if(!output[typeof arg]){
            output[typeof arg] = 0
        }
        output[typeof arg] += 1
    }
    Object.entries(output).sort((a,b)=>b[1]-a[1]).forEach(x=>{
        console.log(`${x[0]} = ${x[1]}`)
    })
}
solve('cat', 42, function () { console.log('Hello world!'); })