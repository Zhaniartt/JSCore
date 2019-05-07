function solve() {
    let number = document.querySelector('input')
    
    let buttons = document.querySelectorAll('button')
   function isEmpty(){
       if (number.value === ''){
           number.value = 0
       }
   }
    buttons[0].addEventListener('click',function chop(){
        isEmpty()
        number.value = number.value/2
        document.querySelector('#output').textContent = number.value
       })
    buttons[1].addEventListener('click',function dice(){
        isEmpty()

        number.value = Math.sqrt(number.value)
        document.querySelector('#output').textContent = number.value
    })
    buttons[2].addEventListener('click',function spice(){
        isEmpty()
        number.value = ++number.value
         document.querySelector('#output').textContent = number.value
         
    })
    buttons[3].addEventListener('click',function bake(){
        isEmpty()

        number.value = number.value *3
        document.querySelector('#output').textContent = number.value
        
    })
    buttons[4].addEventListener('click',function fillet(){
        isEmpty()

        number.value = number.value * 0.8
        document.querySelector('#output').textContent = number.value
        
    })

}
