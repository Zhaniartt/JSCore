function solve(params) {
    let sum = (()=>{return params.reduce((a,b)=>a+b)})()
    let min = (()=>{return Math.min(...params)})()
    let max = (()=>{return Math.max(...params)})()
    let product = (()=>{return params.reduce((a,b)=>a*b)})()
    let join = (()=>{return params.map(x=>x.toString()).join('')})()
    console.log(`Sum = ${sum}\nMin = ${min}\nMax = ${max}\nProduct = ${product}\nJoin = ${join}`)

}