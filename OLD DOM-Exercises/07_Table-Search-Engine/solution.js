function solve () {
        let rows = Array.from(document.querySelectorAll('tr'))
        rows.shift()
        let searchItem = document.querySelector('#searchField')
        let searchButton = document.querySelector('#searchBtn')
        searchButton.addEventListener('click', search)
       
        function search () {
          let searchedText = searchItem.value
       
          for (let row of rows) {
            row.removeAttribute('class', 'select')
       
            for (let td of Array.from(row.children)) {
              if (td.textContent.includes(searchedText)) {
                row.setAttribute('class', 'select')
                break
              }
            }
          }
          searchItem.value = ''
        }
      }
