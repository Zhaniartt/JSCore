function addDestination () {
    let [city,country] = Array.from(document.querySelectorAll('#input input'));
    let dropDownMenu = document.getElementById("seasons");
    let season = dropDownMenu.options[dropDownMenu.selectedIndex].value;
    if(city.value!=='' && country.value !== ''){
        let destinationList = document.querySelector('#destinationsList');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let temp = country.value.charAt(0).toUpperCase() + country.value.slice(1);
        td1.textContent = `${city.value}, ${temp}`
        td2.textContent = `${season.charAt(0).toUpperCase() + season.slice(1)}`
        tr.appendChild(td1)
        tr.appendChild(td2)
        destinationList.appendChild(tr);
        let summary = document.getElementById(`${season}`);
        summary.value++;
        city.value = '';
        country.value = '';
    }
}