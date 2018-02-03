var Word = require ("./Word.js")
var inquire = require ("inquirer")

var toGuessArray = ["BALROG", "CHUN LI", "DHALSIM", "CAMMY", "M BISON", "SHORYUKEN", "TATSUMAKI SENPUKYAKU", ];
var toGuess = toGuessArray[Math.floor((Math.random() * 7))]
var displayArray = [];
var userGuess = 0;

makeArray(toGuess);

function makeArray(word){
    for (var i = 0; i < word.length; i++) {
       toGuessArray.push(word.charAt(i));
    }
}

var ryu = new Word(toGuessArray);

function runGame(){
    ryu.displayWord();
}

runGame();