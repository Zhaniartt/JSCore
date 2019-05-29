function solve() {
    let temp = document.querySelectorAll('button[class="seat"]')
    let output = document.querySelector('#output')
    let temporary =[temp][0]
    let levski = []
    let liteks = []
    let vip = []
  for(let i = 0; i < temporary.length;i++){
      if(i >= 0 && i <= 14){
          levski.push(temporary[i])
      }else if(i >= 15 && i <= 29){
          liteks.push(temporary[i])
      }else if(i >= 30){
          vip.push(temporary[i])
      }
  }
  for(let i = 0; i< levski.length;i++){
      if(i % 3 === 0){
          levski[i].setAttribute('value','10')
          liteks[i].setAttribute('value','10')
          vip[i].setAttribute('value','25')
      }else if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14){
        levski[i].setAttribute('value','5')
        liteks[i].setAttribute('value','5')
        vip[i].setAttribute('value','10')
      }else{
        levski[i].setAttribute('value','7')
        liteks[i].setAttribute('value','7')
        vip[i].setAttribute('value','15')
      }
  }
  temp.forEach(x=> x.addEventListener('click',getInfo))

let sum = 0;
let fans = 0;
function getInfo(e){
    let message = '';
    let sector = String.fromCharCode(65 + e.target.parentNode.cellIndex);
    let zone = this.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('h2')[0].textContent
  
    if(this.style.backgroundColor === ''){
        message = ` Seat ${this.textContent} in zone ${zone} sector ${sector} was taken.`
        this.style.backgroundColor = "rgb(255,0,0)";
        sum += Number(this.value)
        fans++
    }else{
      message = ` Seat ${this.textContent} in zone ${zone} sector ${sector} is unavailable.`
    }
    output.value += `${message}\n`
}
document.querySelector('#summary').addEventListener('click',summary)
function summary(){
    this.getElementsByTagName('span')[0].textContent = `${sum} leva, ${fans} fans.`
}
}