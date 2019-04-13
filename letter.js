var Letter = function(inputLetter) {
    this.letter = inputLetter.toLowerCase();
    this.guessed = false;

    this.checkLetter = function() {
        if (this.guessed) {
            return inputLetter;
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
