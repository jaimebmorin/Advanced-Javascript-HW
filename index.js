//required packages
var Word = require("./Word.js");
var inquirer = require("inquirer");


//variables needed for program; unfortunately I'm having a few issues with accessing a few variables so for now I've just defined
//them as global variables to make it easier
//for now there aren't any spaces in my possible words
var toGuessArray = ["BALROG", "KEN", "DHALSIM", "CAMMY", "HADOUKEN", "SHORYUKEN", "ZANGIEF", ];
var toGuess = toGuessArray[Math.floor((Math.random() * 7))]
var toGuessWord = [];
var displayArray = [];
var userGuess;
var guessesLeft = 5;

//create my array of letters for the word to guess
//all characters have been pushed on "toGuessWord" array.
makeArray(toGuess);
function makeArray(word){
    for (var i = 0; i < word.length; i++) {
       toGuessWord.push(word.charAt(i));
    }
}

//create constructor called Ryu that is a new 'Word'
var ryu = new Word(toGuessWord);


//function to take user guess. I've added validation on inquirer that ensures the guess is capital uppercase. 
function takeGuess(){
    inquirer.prompt([
      {
        type: "input",
        message: "Please enter your guess(upper-case letter) now!!",
        name: "guessed",
        validate: function(value) {
            var pass = value.match(/^[A-Z]*$/);
            if (pass && value.length == 1) {
                return true;
            }
            return "Please enter a valid-guess in upper case";
        }
      }
    ])
    .then(function(inquirerResponse) {
        userGuess = inquirerResponse.guessed;
        //not sure what to do from here. When I test each constructor seperately
        //everything works fine(ie guesses are registered correctly)
        //I'm just not sure how to get from this point to the letter.js function of checking the letter. 
        //Other than this everything else works fine.
    });    
}

//run the main game function. I'm having an issue doing it this way due to the functions running too fast. Researching "promises"
//as of now they seem like the cleanest way to deal with this issue.
function runGame(){
    ryu.displayWord();
    takeGuess();
}

runGame();