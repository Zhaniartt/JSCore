class Vacation{
    constructor(organizer,destination,budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    registerChild (name, grade, budget) {
        if (budget < this.budget) {
          return `${name}'s money is not enough ` +
            `to go on vacation to ${this.destination}.`
        } else if (!this.kids.hasOwnProperty(grade)) {
          this.kids[grade] = []
        }
    
        if (this.kids[grade].findIndex(k => k.startsWith(name)) !== -1) {
          return `${name} is already in the list ` +
            `for this ${this.destination} vacation.`
        }
    
        this.kids[grade].push(`${name}-${budget}`)
    
        return this.kids[grade]
      }
    removeChild(name,grade){
        if(this.kids.hasOwnProperty(grade)){
            let findTheKid = false;            
            for(let r in Object.values(this.kids[grade])){
                let temp = Object.values(this.kids[grade])[r]
                let [currentName,budg] = temp.split('-')
                if(name === currentName){
                 this.kids[grade].splice(r,1);
                 findTheKid = true;
                 return this.kids[grade]
                }
            }            
            if(findTheKid === false){
                return `We couldn't find ${name} in ${grade} grade.`
            }
        }else{
            return `We couldn't find ${name} in ${grade} grade.`

        }   
    }
    toString(){
        if(this.numberOfChildren === 0){
            return 'No children are enrolled for the trip ' +
            `and the organization of ${this.organizer} falls out...`
        }
        let sortedKids = Object.entries(this.kids).sort((a,b)=> a[0] -b[0]);
        let totalSumOfTheKids = 0
        sortedKids.map(x=>{
            let length = x[1].length
            totalSumOfTheKids += length
        })
        let output = `${this.organizer} will take ${totalSumOfTheKids} children on trip to ${this.destination}\n`
        for(let [index,kids] of Object.entries(sortedKids)){
            output += `Grade: ${kids[0]}`
            let counter = 1;
            for(let kid of kids[1]){
                output += `\n${counter}. ${kid}`
                counter++
            }
            output += `\n`
        }
        return output
    }
    get numberOfChildren () {
    return Object.values(this.kids)
      .map(x => x.length)
      .reduce((acc, el) => acc + el, 0)

}
}