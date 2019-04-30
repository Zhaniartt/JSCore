function days(day){
let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    if(week.includes(day)){
        return week.indexOf(day)+1
    }else{
        return 'error'
    }       
}
console.log(days('Tuesday'))