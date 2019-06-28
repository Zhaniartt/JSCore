class Stringer{
    constructor(innerString,innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(length){
        this.innerLength += length;
    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    toString(){
        let tempStr = this.innerString;
        let tempLength = this.innerLength;
        if(tempStr.length > tempLength){
            tempStr = tempStr.slice(0,tempLength);
            tempStr += '...';
        }
        if(tempLength === 0){
            tempStr = '...';
        }
        return tempStr;
    }
}
let test = new Stringer('Test',5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4);
console.log(test.toString())