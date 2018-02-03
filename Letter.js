

function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.displayCharacters = function () {
        if (this.guessed) {
            return(this.character);
        } else {
            return("_");
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

module.exports = Letter;

//letter.CheckGuess(guessInput);


