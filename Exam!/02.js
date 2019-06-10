function solve(capacity,passengers) {
    let train = []
    train.length = passengers.length
for(let n = 0; n < train.length; n++){
    train[n] = 0;
}
for(let i = 0; i < train.length;i++){
    if(train[i] + passengers[i] <= capacity){
        train[i] = passengers[i]
        passengers[i] = 0;
    }else{
        passengers[i] -= capacity;
        passengers[i+1] += passengers[i];
        train[i] = capacity; 
    }
}

      if(passengers[passengers.length-1] === 0){
          console.log(train);
          console.log(`All passengers aboard`);
      }else{
        console.log(train);
         console.log(`Could not fit ${passengers[passengers.length-2]} passengers`);
      }
      
}
solve(10, [9, 39, 1, 0, 0])