function  solve(params) {
    let theBiggest = Number.MIN_SAFE_INTEGER
    for(let param of params){
        for(let par of param){
            if(par > theBiggest){
                theBiggest = par
            }
        }
    }
    return theBiggest
}
solve([[20, 50, 10],
    [8, 33, 145]])