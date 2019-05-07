function greatestCD() {
    let x = Number(document.querySelector('#num1').value)
    let y = Number(document.querySelector('#num2').value)
        
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        document.querySelector('#result').textContent = x
}