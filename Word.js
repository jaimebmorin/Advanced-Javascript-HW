var Letter = require ("./Letter.js");


var word = "HELLO";

var wordArray = [];
function makeArray(word){
    for (var i = 0; i < word.length; i++) {
       wordArray.push(word.charAt(i));
    }
}

makeArray(word);
var word = new Word (wordArray);
word.displayWord();

function Word(wordArray){
    this.wordArray = wordArray;
    this.displayWord = function () {
        for (var x = 0; x < wordArray.length; x++) {
            var letter = new Letter(wordArray[x]);
            letter.displayCharacter();
        }
    }
}