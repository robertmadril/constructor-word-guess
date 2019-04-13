var Letter = require("./letter.js");

var Word = function(word){
    this.word = word;
    this.letters = [];

    this.getLetters = function() {
        console.log("Getting letters");
        for(i=0; i<this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    }

    this.returnString = function() {
        console.log("returning string");
        var stringArray = [];
        for (i=0; i<this.letters.length; i++) {
           stringArray.push(this.letters[i].checkLetter());
        }   

        return stringArray.join(" ");
    }

    this.checkAllLetters = function(char) {
        console.log("checking all letters")
        var lowerChar = char.toLowerCase();
        for (i=0; i<this.letters.length; i++) {
            this.letters[i].updateBoolean(lowerChar);
        }
    }
}

module.exports = Word;

