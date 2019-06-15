function deleteByEmail() {
    let allRows = Array.from(document.querySelectorAll('tbody tr'));
    let searchinEmail = document.querySelector('input').value;
    for(let row of allRows){
        if(row.childNodes[3].textContent === searchinEmail){
            let index = allRows.indexOf(row);
            document.querySelector("table").deleteRow(index+1);
            document.querySelector('#result').textContent = 'Deleted.'
            break;
        }else if(row.childNodes[3].textContent !== searchinEmail){
            document.querySelector('#result').textContent = 'Not found.'

        }
    }
}