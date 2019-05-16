function solve(num1,num2,op){
    let input = 0;
    let add = function (c,d) {return c+d}
    let subtract = function(c,d){return c - d}
    let multiply = function(c,d){return c * d}
    let divide = function(c,d){return c/d}
    let modulDivide = function(c,d){return c%d}
    let exponentiation = function(c,d){return c**d}
    switch(op){
        case '*': input =  multiply(num1,num2)
        break;
        case '+': input=  add(num1,num2)
        break;
        case '-': input = subtract(num1,num2)
        break;
        case '/': input =  divide(num1,num2)
        break;
        case '%': input= modulDivide(num1,num2)
        break;
        case '**':input= exponentiation(num1,num2)
    }
    console.log(input)

    }
solve(2, 4, '+')