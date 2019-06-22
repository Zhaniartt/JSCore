class Person{
    constructor(first,last,age,email){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.email = email;
    }
    toString(){
        let output = `${this.firstName} ${this.lastName} (age ${this.age}, email: ${this.email})`;
        return output
    }
}
let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log();
