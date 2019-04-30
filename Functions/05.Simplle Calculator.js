function solve(num1,num2,op){
let add = function (c,d) {return c+d}
let subtract = function(c,d){return c - d}
let multiply = function(c,d){return c * d}
let divide = function(c,d){return c/d}
switch(op){
    case '*': return multiply(num1,num2)
    case '+': return add(num1,num2)
    case '-': return subtract(num1,num2)
    case '/': return divide(num1,num2)
}

}
console.log(solve(2,4,'+'))