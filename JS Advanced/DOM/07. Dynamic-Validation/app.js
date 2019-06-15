function validate() {
    const email = document.querySelector('#email');
    email.addEventListener('change',()=>{
        let emailToCheck = document.querySelector('#email');
        if(emailToCheck.value.match(/^[a-z]+@[a-z]+.[a-z]+$/g)){
            emailToCheck.value = '';
            emailToCheck.removeAttribute('class');
        }else{
            emailToCheck.className = 'error';
        }
    });
    
}