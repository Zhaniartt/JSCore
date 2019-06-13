function addItem(){
    let text = document.querySelector('#newItemText').value;
    let valueInfo = document.querySelector('#newItemValue').value;
    let optionElement = document.createElement('option');
    optionElement.textContent = text;
    optionElement.value = valueInfo;
    document.querySelector('#menu').appendChild(optionElement);
    text.value = '';
    valueInfo.value = '';
    
}