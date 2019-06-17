function lockedProfile() {
    let allButtons = Array.from(document.querySelectorAll('button'));
    allButtons.forEach(x=> x.addEventListener('click',showOrHide));
    function showOrHide(e){
        let currentSection = e.target.parentNode;
        let infoToDisplay = currentSection.querySelectorAll('div');
        let currentButton = currentSection.querySelector('button');
        let [lock,unclock] = Array.from(currentSection.querySelectorAll('input'));
        if(currentButton.textContent === 'Show more'){
            if(unclock.checked === true){
                infoToDisplay[0].style.display = 'block';
                currentButton.textContent = 'Hide';
            }
        }else{
            if(unclock.checked === true){
                infoToDisplay[0].style.display = 'none';
                currentButton.textContent = 'Show more';
            }
        }
        
    }
}