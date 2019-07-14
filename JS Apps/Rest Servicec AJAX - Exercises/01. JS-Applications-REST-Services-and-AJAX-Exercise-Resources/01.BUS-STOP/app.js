function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('stopName').textContent = data.name;
            document.getElementById('buses').innerHTML = '';
            for (const bus in data.buses) {
                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
                document.getElementById('buses').appendChild(li);
            }
        })
        .catch(error => {
            console.log(error)
            document.getElementById('stopName').textContent = 'Error';
        });
}