function solve() {
    let text = Array.from(document.querySelector('#text').value)
    let number = +document.querySelector('#number').value;
    let result = document.querySelector('#result')
    let validKeys = [];
   if(text.join('').match(new RegExp(`.{1,${number}}`,'g')) === null){
      let output = []
      while(output.length < number){
          text.forEach(x=> output.push(x))
      }
  let lastElement = text.pop()
  lastElement += text.slice(0, number - lastElement.length)
  output.push(lastElement)
      result.textContent = output.join('')
    }else{
        text = text.join('').match(new RegExp(`.{${number}}`,'g')).join(' ')
        validKeys.push(text)
        result.textContent = validKeys.join('')

    }
}