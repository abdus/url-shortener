'use strict';

const rand = () => {
  let randWord = '',
    randChar,
    temp;

  for (let i = 0; i < 3; i++) {
    temp = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    randChar = String.fromCharCode(temp);
    randWord = randChar + randWord;
    temp = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    randChar = String.fromCharCode(temp);
    randWord = randChar + randWord;
  }
  return randWord;
};

module.exports = rand;
