class Vacation{
    constructor(organizer,destination,budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    registerChild(name,grade,budget){
        if(budget >= this.budget){
            if(!this.kids.hasOwnProperty(grade)){
                this.kids[grade] = {};
            }
            if(!this.kids[grade].hasOwnProperty(name)){
                this.kids[grade][name] = budget;

            }else{
                return `${name} is already in the list for this ${this.destination}`;
            }
        }else{
            return `${name}'s money is not enough to go on vacation to ${this.destination}`;
        }
    }
}
