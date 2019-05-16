function solve(num){
    let arr = []
    for(let i = 1; i <= num;i++){
        for(let n = 1; n <= num;n++){
            arr.push('*'.repeat(num))
            console.log(arr[0].split('').join(' '))
            arr = []
            break;
        }
    }

}
solve(5)