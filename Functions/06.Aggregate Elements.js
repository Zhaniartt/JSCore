function solve(arr){
    function sum(arr){
        return arr.reduce((a,b)=> a+b)
    }
    function intSum(arr){
        let sum = 0;
        for(let ar of arr){
            sum += 1/ar
        }
        return sum;
    }
    function concat(arr){
        return arr.join('')
    }
    console.log(sum(arr))
    console.log(intSum(arr))
    console.log(concat(arr))


}
solve([2, 4, 8, 16])