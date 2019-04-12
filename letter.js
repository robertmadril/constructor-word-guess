var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
    this.checkLetter = function() {
        if (this.guessed) {
            return this.letter;
        }
        else {
            return "__";
        }
    }
    this.updateBoolean = function(char) {
        if (char === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;
