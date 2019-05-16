function days(day){
    let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    let input = ''
        if(week.includes(day)){
            input= week.indexOf(day)+1
        }else{
            input= 'error'
        }   
        console.log(input)    
    }
    days('Tuesday')