var Letter = require ("./Letter.js");

//Word constructor. I created a second array soley for display purposes. I'm not sure if this
//was the proper way to do it but it seemed a bit easier to do for me.

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




