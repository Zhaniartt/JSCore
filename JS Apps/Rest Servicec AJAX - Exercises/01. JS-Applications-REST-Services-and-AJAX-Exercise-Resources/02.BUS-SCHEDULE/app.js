function solve() {
    let currentId = 'depot';

    function depart() {
        let urlBase = `https://judgetests.firebaseio.com/schedule/${currentId}.json`
       fetch(urlBase).then(response =>{
           return response.json()
       }).then(data=>{
           document.querySelector('#arrive').disabled = false;
           document.querySelector('#depart').disabled = true;
            let currentStop = data.name;
            document.querySelector('.info').textContent = `Next stop ${currentStop}`;
            currentId = data.next;
       });
    }

    function arrive() {
        let currentStop = document.querySelector('.info').textContent;
        currentStop = currentStop.split(' ').slice(2,).join(' ');
        document.querySelector('.info').textContent = `Arriving at ${currentStop}`;
        document.querySelector('#arrive').disabled = true;
        document.querySelector('#depart').disabled = false;
    }

    return {
        depart,
        arrive
    }; 
}

let result = solve();