var Letter = require ("./Letter.js");

function Word(wordArray){
    this.wordArray = wordArray;
    this.displayArray = [];
    this.displayWord = function () {
        for (var x = 0; x < wordArray.length; x++) {
            var letter = new Letter(wordArray[x]);
            this.displayArray.push(letter.displayCharacters());
            }
        console.log(this.displayArray.join(' '));
    }
}

module.exports = Word;




