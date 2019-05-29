function solve() {
   let buttons = Array.from(document.querySelectorAll('fieldset button')).forEach(x=>x.addEventListener('click',getResult))
   function getResult(){
      let text = document.querySelector('#input').value
      if(this.parentNode.id === 'filter'){
         let filter =document.getElementById("filterSecondaryCmd").options.selectedIndex
         let filterPosition = +document.querySelector('#filterPosition').value
         switch(filter){
            case 1 :
             text = text.split('').filter(x=> x.match(/[A-Z]+/))[filterPosition-1]
            break;
            case 2 :
            text = text.split('').filter(x=>x.match(/[a-z]+/))[filterPosition-1]
            break;
            case 3 :
            text = text.split('').filter(x=> x.match(/[0-9]+/))[filterPosition-1]
            break;
         }
         document.querySelector('#output p').textContent += text
      }else if(this.parentNode.id === 'sort'){
         let sort =document.getElementById("sortSecondaryCmd").options.selectedIndex
         let sortPosition = +document.querySelector('#sortPosition').value
         switch(sort){
            case 1 :
             text = text.split('').sort()[sortPosition-1]
            break;
            case 2 :
            text = text.split('').sort().reverse()[sortPosition-1]
            break;
           
         }
         document.querySelector('#output p').textContent += text

      }else if(this.parentNode.id === 'rotate'){
         let rotate = document.querySelector('#rotateSecondaryCmd').value
         let rotatePosition = +document.querySelector('#rotatePosition').value
         text = text.split('')
         for(let i = 1; i <= rotate;i++){
            let temp = text.pop()
            text.unshift(temp)
         }
         text = text[rotatePosition-1]
         document.querySelector('#output p').textContent += text

      }else if(this.parentNode.id ==='get'){
         let getPosition = +document.querySelector('#getPosition').value
         text = text.split('')[getPosition-1]
         document.querySelector('#output p').textContent += text

      }
    
   }
}