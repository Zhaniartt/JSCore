class CheckingAccount{
    constructor(clientId,email,firstName,lastName){
        if(clientId.match(/[\d]{6}/g)){
            this.clientId = clientId;
        }else{
            throw new TypeError('Client ID must be a 6-digit number');
        }
        if(email.match(/^\w+@[A-Za-z.]+$/g)){
            this.email = email;
        }else{
            throw new TypeError('Invalid e-mail');
        }
        if(firstName.match(/^[A-Za-z]{3,20}/)){
            this.firstName = firstName;
        }else{
            if(firstName.length < 3 || firstName.length > 20){
                throw new TypeError(`First name must be between 3 and 20 characters long`);
            }else {
                throw new TypeError(`First name must contain only Latin characters`);
            }
        }
        if(lastName.match(/^[A-Za-z]{3,20}/)){
            this.lastName = lastName;
        }else{
            if(lastName.length < 3 || lastName.length > 20){
                throw new TypeError(`Last name must be between 3 and 20 characters long`);
            }else {
                throw new TypeError(`Last name must contain only Latin characters`);
            }
        }
        this.products = [];
    }
}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
