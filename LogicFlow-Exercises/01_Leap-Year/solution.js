function leapYear() {
    let checkButton = document.querySelector('button')
    checkButton.addEventListener('click',checkTheYear)
    let h2 = document.querySelector('#year h2')
    let div = document.querySelector('#year div')
    let input = document.querySelector('input')

     function checkTheYear()
    {
        let year = +input.value;

        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            h2.textContent = 'Leap Year'

        }else{
            h2.textContent = 'Not Leap Year'

        }
        div.textContent = year
        input.value = '';
        }
}