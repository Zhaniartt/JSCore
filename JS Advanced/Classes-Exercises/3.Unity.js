    class Rat{
        constructor(name){
            this.name = name;
            this.rats = [];
        }
        unite(otherRat){
            if(otherRat instanceof Rat){
                this.rats.push(otherRat);
            }
        }
        getRats(){
            return this.rats;
        }
        toString(){
            return [this.name, ...this.rats.map(r => `##${r}`)].join('\n')

        }
    }
