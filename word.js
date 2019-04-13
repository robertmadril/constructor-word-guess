var Letter = require("./letter.js");

var Word = function(word){
    this.word = word;
    this.letters = [];

    this.getLetters = function() {
        for(i=0; i<this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    }

    this.returnString = function() {
        var stringArray = [];
        for (i=0; i<this.letters.length; i++) {
           stringArray.push(this.letters[i].checkLetter());
        }   

        console.log(stringArray.join(" "));
    }

    this.checkAllLetters = function(char) {
        var lowerChar = char.toLowerCase();
        for (i=0; i<this.letters.length; i++) {
            this.letters[i].updateBoolean(lowerChar);
        }
    }
}

module.exports = Word;

