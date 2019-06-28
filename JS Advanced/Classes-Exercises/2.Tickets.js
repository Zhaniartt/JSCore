function  solve(params,sortMethod) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let outputArray = []
    for(let param of params){
        let [destination,price,status] = param.split('|');
        price = +price;
        let newInput = new Ticket(destination,price,status);
        outputArray.push(newInput);
    }
   return outputArray = outputArray.sort((a,b)=>{
       if(a.sortMethod < b.sortMethod){
           return -1;
       }else if(a.sortMethod > b.sortMethod){
           return 1;
       }
       return 0;
   });
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));