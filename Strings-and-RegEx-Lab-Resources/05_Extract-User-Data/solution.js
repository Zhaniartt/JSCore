function solve() {
    let userData = JSON.parse(document.querySelector('#arr').value)
    let pattern = /^([A-Z][a-z]{0,})\s([A-Z][a-z]{0,})\s([+359]+([\s|-])\d\4\d+\4\d+)\s([a-z]+\@[a-z]{1,}.[a-z]{2,3})$/g
    for(let user of userData){
       let p3 = document.createElement('p')
       if(user.match(pattern)){
        let p = document.createElement('p')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
            let data = pattern.exec(user)
           p.textContent = `Name: ${data[1]}`
           p1.textContent = `Phone Number: ${data[2]}`
           p2.textContent = `Email: ${data[4]}`
           p3.textContent = `- - -`
           document.querySelector('#result').appendChild(p)
           document.querySelector('#result').appendChild(p1)
           document.querySelector('#result').appendChild(p2)
           document.querySelector('#result').appendChild(p3)


       }else{
            let p = document.createElement('p')
            p.textContent = 'Invalid data'
            p3.textContent = `- - -`
            document.querySelector('#result').appendChild(p)
            document.querySelector('#result').appendChild(p3)

       }
   }
}