function solve(inp1,inp2,inp3){
    let input1 = inp1.length;
    let input2 = inp2.length;
    let input3 = inp3.length;
    function sum(){
        return input1 + input2 + input3;
    }
    function average(){
         return (sum(input1,input2,input3) / 3);
    }
    console.log(sum(input1,input2,input3))
    console.log(Math.floor(average(input1,input2,input3)))
}
solve('pasta', '5', '22.3')