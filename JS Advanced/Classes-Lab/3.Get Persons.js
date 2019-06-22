function solve() {
    class Person{
        constructor(first,last,age,email){
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.email = email;
        }
        toString(){
            let output = `${this.firstName} ${this.lastName} (age ${this.age}, email: ${this.email})`;
            return output;
        }
    }
        return [
            new Person('Maria','Petrova',22,'mp@yahoo.com'),
            new Person('SoftUni'),
            new Person('Stephan','Nikolov',25),
            new Person('Peter','Kolev',24,'ptr@gmail.com')
        ];
}
solve().forEach(x=>console.log(x));