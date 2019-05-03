function solve() {
  let mainString = document.querySelector('#string').value
  let uniqueChars = ''
        function isWhiteSpace(i){
          if(mainString[i] === ' '){
            uniqueChars += mainString[i]
          }
        }
        function isUnique(i){
            if(uniqueChars.indexOf(mainString[i]) === -1){
              uniqueChars += mainString[i]
            }
        }
        function findUnique(mainString){
          for(let i = 0; i< mainString.length;i++){
              isWhiteSpace(i)
              isUnique(i)
          }
        }
        findUnique(mainString);
        document.querySelector('#result').textContent = uniqueChars;
}