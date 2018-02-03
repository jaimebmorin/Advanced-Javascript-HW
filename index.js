var Word = require ("./Word.js")

var toGuessArray = ["BALROG", "CHUN LI", "DHALSIM", "CAMMY", "M BISON", "SHORYUKEN", "TATSUMAKI SENPUKYAKU", ];
var toGuess = toGuessArray[Math.floor((Math.random() * 7))]

var toGuessArray = [];
var displayArray = [];


var userGuess = "H";

function makeArray(word){
    for (var i = 0; i < word.length; i++) {
       toGuessArray.push(word.charAt(i));
    }
}


makeArray(toGuess);

//console.log(toGuessArray);
var ryu = new Word(toGuessArray);
ryu.displayWord();