function attachEvents() {
    let getallInputs = Array.from(document.querySelectorAll('input'));
    let name = getallInputs[0];
    let message = getallInputs[1];
    let sendButton = getallInputs[2].addEventListener('click',sendFunc);
    let refreshBtn = getallInputs[3].addEventListener('click',refreshFunc);
    function sendFunc(){
        if(name.value !== '' && message.value!== ''){       
        const url = 'https://messenger-16775.firebaseio.com/messenger.json'

            let obj = {
                author:name.value,
                content:message.value
            }
            fetch(url,{
                method:'POST',
                body:JSON.stringify(obj),
            }).then(response=>response.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error=> console.log('Error:',error));
            name.value = '';
            message.value = '';
         }
    }
    function refreshFunc(){
        document.querySelector('#main textarea').textContent = ''
        const url = 'https://messenger-16775.firebaseio.com/messenger.json'
        fetch(url).then(res=>{
            return res.json();
        }).then(data => {
            let info = Object.values(data);
            info.map(x=> document.querySelector('#main textarea').textContent += `${x.author}: ${x.content}\n`)
           
        });
    }
}

attachEvents();