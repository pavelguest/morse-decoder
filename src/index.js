const MORSE_TABLE = {
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

function decode(expr) {
  const letters = expr.match(/.{10}/g).toString();
  const arrForLetters = letters.replace(/10/g, '.').replace(/11/g, '-').replace(/\*{10}/g, ' ').replace(/0/g, '').split(',');
  const decoded = [];
  for (i = 0; i < arrForLetters.length; i++) {
    if (arrForLetters[i] == ' ') {
      decoded.push(' ');
    } else {
      decoded.push(MORSE_TABLE[arrForLetters[i]]);
  }
}
  return decoded.join('');
};

module.exports = {
    decode
}
