function addItem() {
    const getValueOfNewItem = ()=> { return document.querySelector('#newItemText').value;};
    const deleteValue = () => {return document.querySelector('#newItemText').value = '';};
    const createLi = () => {
        let newLi = document.createElement('li'); 
        newLi.textContent = getValueOfNewItem();
       document.querySelector('#items').appendChild(newLi);};
         const output = () => { 
        createLi();
        deleteValue();
     }
     output(); 
}