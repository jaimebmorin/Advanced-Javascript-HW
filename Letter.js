var guessInput = "r";
var letter = new Letter("r");

function Letter(character, guessed) {
    this.character = character;
    this.guessed = guessed || false;
    this.displayCharacter = function () {
        if (this.guessed) {
            console.log(this.character);
        } else {
            console.log("_");
        }
    }
    this.CheckGuess = function(guess) {
        if (guess === this.character) {
            this.guessed = true; 
            this.displayCharacter();
        } else {
        this.displayCharacter();
        }
    }
}


letter.CheckGuess(guessInput);