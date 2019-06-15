function addItem() {
    const getValueOfNewItem = ()=> { return document.querySelector('#newText').value;};
    const deleteValue = () => {return document.querySelector('#newText').value = '';};
    const createDeleteBtn = () => { let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
                               return deleteBtn;}
    const createLiElements = () => {
       let newLi = document.createElement('li'); 
        newLi.textContent = getValueOfNewItem();
        newLi.appendChild(createDeleteBtn());
       document.querySelector('#items').appendChild(newLi);};

    const deleteElements = ()=> {
        let itemToDelete = Array.from(document.querySelectorAll('#items li a'));
        itemToDelete.forEach(x=> x.addEventListener('click',(e)=>{
            let getDelete = e.target.parentNode;
                getDelete.remove();
        }));

    }

   
        createLiElements();
        deleteValue();
        deleteElements();
     
}