function solve(in1,in2){
    let vatDivide =  in2 / 100 + 1
    let total = in1/vatDivide
    console.log(total.toFixed(2)); 
}
solve(220.00,
    10.00)