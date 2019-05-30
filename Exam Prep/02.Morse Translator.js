function solve(input){
    function decodeMorse(morseCode) {
        let ref = { 
          '.-':     'a',
          '-...':   'b',
          '-.-.':   'c',
          '-..':    'd',
          '.':      'e',
          '..-.':   'f',
          '--.':    'g',
          '....':   'h',
          '..':     'i',
          '.---':   'j',
          '-.-':    'k',
          '.-..':   'l',
          '--':     'm',
          '-.':     'n',
          '---':    'o',
          '.--.':   'p',
          '--.-':   'q',
          '.-.':    'r',
          '...':    's',
          '-':      't',
          '..-':    'u',
          '...-':   'v',
          '.--':    'w',
          '-..-':   'x',
          '-.--':   'y',
          '--..':   'z',
          '.----':  '1',
          '..---':  '2',
          '...--':  '3',
          '....-':  '4',
          '.....':  '5',
          '-....':  '6',
          '--...':  '7',
          '---..':  '8',
          '----.':  '9',
          '-----':  '0',
        };
      
        return morseCode
          .split('   ')
          .map(
            a => a
              .split(' ')
              .map(
                b => ref[b]
              ).join('')
          ).join(' ');
      }
      
      var decoded = decodeMorse(input);
      console.log(decoded.toLowerCase());

}
solve('--. --- --- --. .-.. .')