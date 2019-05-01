function modifyAverage(number) {
    function getAverage(number) {
        number = String(number).split('').map(x=> Number(x))
         let sum = number.reduce((a,b)=>a+b)
          return sum / number.length;
    }
    let average = getAverage(number);

    let addNine = x => x + "9";

    while(average <= 5) {
        number = addNine(number);
        average = getAverage(number);
    }

    console.log(number);
}
modifyAverage(101)