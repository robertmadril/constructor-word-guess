var Word = require("./word.js");
var inquirer = require("inquirer");

var wordsToGuess = ["Impala", "Toad", "Elk", "Ant", "Rhino", "Python", "Goat", "Lama", "Serpent", "Gecko", "PIG", "Raptor", "Penguin", "Cheetah", "Porcupine", "Orca", "Seagull", "Squirrel", "Mouse", "Pike", "Lynx", "ASP", "Falcon", "Cobra", "Sloth"];

var numGuesses = 6;
var isComplete = false;

function startGame() {
    console.log("Guess the programming language with an animal in their logo.");
    numGuesses = 6;
    var arrLength = (wordsToGuess.length) - 1;
    var randomNum = Math.floor(Math.random() * arrLength);
    var newWord = wordsToGuess[randomNum];
    var wordGuess = new Word(newWord);
    wordGuess.getLetters();
    inquirerInput(wordGuess);

}

function inquirerInput(obj) {
    inquirer
        .prompt([{
            type: "input",
            name: "letterInput",
            message: "Please guess a letter",
        },
        ])
        .then(function (response) {
            obj.checkAllLetters(response.letterInput);
            obj.returnString();
            checkComplete(obj);
            numGuesses--;

            if (isComplete) {
                console.log("Congratulations! You guessed the language!");
                newGame();
            }
            else if (numGuesses > 0) {
                inquirerInput(obj);
            }
            else {
                console.log("Sorry, you lost...")
                newGame();
            }

        })
};

function newGame() {
    inquirer
        .prompt([{
            type: "confirm",
            name: "startNewGame",
            message: "Would you like to play again?",
        },
        ])
        .then(function (response) {

            if (response.startNewGame) {
                startGame();
            }
            else {
                console.log("Thanks for playing!")
            }

        })

}

function checkComplete(obj) {

    var letterObjArray = obj.letters;
    for (i = 0; i < letterObjArray.length; i++) {
        if (!letterObjArray[i].guessed) {
            return false;
        }
    }

    isComplete = true;
}

startGame();