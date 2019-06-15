function focus () {
    Array.from(document.querySelectorAll('input')).forEach(e => {
      e.addEventListener('focus', event => {
          console.log(event.target.parentNode)
        event.target.parentNode.className = 'focused';
      })
      e.addEventListener('blur', event => {
          console.log(event.target.parentNode)
        event.target.parentNode.removeAttribute('class');
      })
    })
  }