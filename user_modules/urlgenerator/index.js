'use strict'


let randWord = "", randNum, num2char;

module.exports = () => {
    for (let i=0; i<3; i++) {
        randNum = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
        num2char = String.fromCharCode(randNum);
        randWord += num2char;
        randNum = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        num2char = String.fromCharCode(randNum);
        randWord += num2char;
    }
    return randWord;
}
