function attachEvents() {
    document.querySelector('#catches').style.display = 'none';
    document.querySelector('button[class=load]').addEventListener('click',loadCatches);
    document.querySelector('button[class=add]').addEventListener('click',addNewCatch);

        async function addNewCatch(){
            let anglerVal = document.querySelector('#addForm input.angler').value;
            let weightVal = document.querySelector('#addForm input.weight').value;
            let speciesVal = document.querySelector('#addForm input.species').value;
            let locationVal = document.querySelector('#addForm input.location').value;
            let baitVal = document.querySelector('#addForm input.bait').value;
            let captureVal = document.querySelector('#addForm input.captureTime').value;
                if(anglerVal && weightVal && speciesVal && locationVal && baitVal && captureVal){
                        let body = {
                            'angler': anglerVal,
                            'weight':weightVal,
                            'species':speciesVal,
                            'bait':baitVal,
                            'captureTime':captureVal
                        }
                    let response = await fetch(`https://fisher-game.firebaseio.com/catches.json`,{
                        method:'POST',
                        body:JSON.stringify(body)
                    });
                      let data = await response.json();
                    if(data){
                        console.log(`Success`,data);
                    }
                }else{
                    throw new Error(`You must fill all of input fields!`);
                }
        }
        async function loadCatches(){
            document.querySelector('#catches').innerHTML = '';
            let response = await fetch('https://fisher-game.firebaseio.com/catches.json');
            let data = await response.json();
            data = Object.entries(data);
           loadData(data);
           Array.from(document.querySelectorAll('button[class=delete]')).forEach(x=>x.addEventListener('click',async function deleteTime(e){
            let catchId = e.target.parentNode.getAttribute('data-id');
            fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`,{
                method:'DELETE'
            }).then(res=> res.json())
              .then(data=> console.log('Deleted'));
              setTimeout(loadCatches,500);
       }));
       Array.from(document.querySelectorAll('button[class=update]')).forEach(x=>x.addEventListener('click',async function updateTime(e){
        let catchId = e.target.parentNode.getAttribute('data-id');
        let data = e.target.parentNode;
        let obj =  {
        "angler":data.querySelector('input[class="angler"]').value,
        "weight":data.querySelector('input[class="weight"]').value,
       "species":data.querySelector('input[class="species"]').value,
        "location":data.querySelector('input[class="location"]').value,
        "bait":data.querySelector('input[class="bait"]').value,
        "captureTime": data.querySelector('input[class="captureTime"]').value  
       }
            fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`,{
                method:'PUT',
                body: JSON.stringify(obj),
            }).then(res=>res.json())
            .then(response => console.log('Success'));
            setTimeout(loadCatches,500);
       }));
            document.querySelector('#catches').style.display = 'block';
        }

        function loadData(data){
            data.forEach(x=>{
                let div = document.createElement('div');
                div.setAttribute('class','catch');
                div.setAttribute('data-id',x[0]);
                let label1 = document.createElement('label');
                label1.textContent = 'Angler';
                let input1 = document.createElement('input');
                input1.setAttribute('type','text');
                input1.setAttribute('class','angler');
                input1.value = x[1].angler;
                let hrElement = document.createElement('hr');
                let label2 = document.createElement('label');
                label2.textContent = 'Weight';
                let input2 = document.createElement('input');
                input2.setAttribute('type','number');
                input2.setAttribute('class','weight');
                input2.value = x[1].weight;
                let hrElement2 = document.createElement('hr');

                let label3 = document.createElement('label');
                label3.textContent = 'Species';
                let input3 = document.createElement('input');
                input3.setAttribute('type','text');
                input3.setAttribute('class','species');
                input3.value = x[1].species;
                let hrElement3 = document.createElement('hr');

                let label4 = document.createElement('label');
                label4.textContent = 'Location';
                let input4 = document.createElement('input');
                input4.setAttribute('type','text');
                input4.setAttribute('class','location');
                input4.value = x[1].location;
                let hrElement4 = document.createElement('hr');

                let label5 = document.createElement('label');
                label5.textContent = 'Bait';
                let input5 = document.createElement('input');
                input5.setAttribute('type','text');
                input5.setAttribute('class','bait');
                input5.value = x[1].bait;
                let hrElement5 = document.createElement('hr');

                let label6 = document.createElement('label');
                label6.textContent = 'Capture Time';
                let input6 = document.createElement('input');
                input6.setAttribute('type','number');
                input6.setAttribute('class','captureTime');
                input6.value = x[1].captureTime;
                let hrElement6 = document.createElement('hr');
                let buttonUpdate = document.createElement('button');
                buttonUpdate.textContent = 'UPDATE';
                buttonUpdate.setAttribute('class','update')
                buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'DELETE';
                buttonDelete.setAttribute('class','delete');
                div.appendChild(label1);
                div.appendChild(input1);
                div.appendChild(hrElement);
                div.appendChild(label2);
                div.appendChild(input2);
                div.appendChild(hrElement2); 
                div.appendChild(label3);
                div.appendChild(input3);
                div.appendChild(hrElement3); 
                div.appendChild(label4);
                div.appendChild(input4);
                div.appendChild(hrElement4); 
                div.appendChild(label5);
                div.appendChild(input5);
                div.appendChild(hrElement5);
                 div.appendChild(label6);
                div.appendChild(input6);
                div.appendChild(hrElement6);
                div.appendChild(buttonUpdate);
                div.appendChild(buttonDelete);
                document.querySelector('#catches').appendChild(div);
            });
        }


}

attachEvents();

