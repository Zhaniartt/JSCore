class List{
    constructor(){
        this.store = [];
        this.size = 0
    }
    add(element){
        this.store.push(element);
        this.store.sort((a,b) => a-b);
        this.size++;
        return this.store;
    }
    remove(index){
        if(index < 0 || index >= this.store.length){
            throw new Error('Invalid index!');
        }
        this.store.splice(index,1);
        this.store.sort((a,b) => a-b);
        this.size--;
        return this.store;
    }
    get(index){
        if(index < 0 || index >= this.store.length){
            throw new Error('Invalid index!');
        }
        return this.store[index];
    }
   
}
let s = new List('jani');
s.add('ani')
s.add('pepi')
s.remove(1);
s.add('gogo')
s.get('2')
s