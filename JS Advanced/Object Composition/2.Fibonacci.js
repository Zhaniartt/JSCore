function getFibonator() {
    let number = 0;
    let fibNumb = 1;
   return ()=>{
        let temp = number;
       let temp2 = fibNumb;
        number = temp2;
        fibNumb = temp + temp2;
        return fibNumb
    }
   
};
let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib()); // 3
console.log(fib()); // 3
console.log(fib()); // 3
