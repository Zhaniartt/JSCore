function attachEvents() {
    let key;
    document.querySelector('#btnLoad').addEventListener('click',loadData);
    document.querySelector('#btnCreate').addEventListener('click',()=>{
        let personValue = document.querySelector('#person').value;
        let phoneValue = document.querySelector('#phone').value;
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

            let obj = {
                person:personValue,
                phone:phoneValue
            };
            fetch(url,{
                method:'POST',
                body:JSON.stringify(obj),
                headers:{
                    'Content-Type': 'application/json'
                  }
            }).then(res=>res.json())
              .then(response => console.log('Success:', JSON.stringify(response)))
              .catch(error => console.error('Error:', error));       
            document.querySelector('#person').value = '';
            document.querySelector('#phone').value = '';
          Array.from(document.querySelectorAll('#phonebook ul')).forEach(x=> x.remove());
          setTimeout(loadData,500);
    });
    function deleteFunc(e){
        let allBtns = Array.from(document.querySelectorAll('#phonebook ul li button'));
        let index = allBtns.indexOf(e.target);
        let currentKey = key[index];
        let url = `https://phonebook-nakov.firebaseio.com/phonebook/${currentKey}.json`
        e.target.parentNode.remove();
        fetch(url,{
            method:'DELETE',
        }).then(res=>res.json())
          .then(response => console.log('Deleted:'+response))
          .catch(error => console.error('Error:', error));
    }
    function loadData(){
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        fetch(url).then(response=>{
            return response.json();
        }).then(data=>{
            let info = Object.values(data);
            key = Object.keys(data);
            info.forEach(({person,phone})=>{
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                li.innerHTML = `${person}:+${phone}`;
                let button = document.createElement('button');
                button.textContent = 'Delete'
                button.addEventListener('click',deleteFunc);
                li.appendChild(button);
                ul.appendChild(li);
                document.querySelector('#phonebook').appendChild(ul);
            });
        });
    };
}

attachEvents();