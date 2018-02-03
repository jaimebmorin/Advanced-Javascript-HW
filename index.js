var Word = require ("./Word.js")
var require 

var toGuessArray = ["BALROG", "CHUN LI", "DHALSIM", "CAMMY", "M BISON", "SHORYUKEN", "TATSUMAKI SENPUKYAKU", ];
var toGuess = toGuessArray[Math.floor((Math.random() * 7))]
var toGuessArray = [];
var displayArray = [];
makeArray(toGuess);


var userGuess = "H";


function makeArray(word){
    for (var i = 0; i < word.length; i++) {
       toGuessArray.push(word.charAt(i));
    }
}





var ryu = new Word(toGuessArray);
ryu.displayWord();