function sub(theArr,start,end){
    if(typeof theArr !== 'object'){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end > theArr.length -1){
        end = theArr.length;
    }
    let output = theArr.slice(start,end+1);
    output = output.reduce((a,b)=>a+b,0);    
    if(typeof output == 'number'){
        return output
    }else{
        return NaN
    }
}
let s = sub([10, 'twenty', 30, 40], 0, 2);
console.log(s)