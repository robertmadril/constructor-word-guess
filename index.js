var Word = require("./word.js");
var inquirer = require("inquirer");

var wordsToGuess = ["Impala", "Toad", "Elk", "Ant", "Rhino", "Python", "Goat", "Lama", "Serpent", "Gecko", "PIG", "Raptor", "Penguin", "Cheetah", "Porcupine", "Orca", "Seagull", "Squirrel", "Mouse", "Pike", "Lynx", "ASP", "Falcon", "Cobra", "Sloth"];

var numGuesses = 6;
var isComplete = false;
var inWord = false;

function startGame() {
    console.log("Guess the programming language with an animal in their logo.");
    numGuesses = 6;
    isComplete = false;
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
            var input = response.letterInput;
            obj.checkAllLetters(input);
            obj.returnString();
            checkComplete(obj);
            checkInWord(obj, input);

            if (isComplete) {
                console.log("Congratulations! You guessed the language!");
                newGame();
            }
            else if (numGuesses > 0) {
                if (inWord) {
                    console.log("You guessed correctly!");
                    inquirerInput(obj);
                    inWord = false;
                }
                else {
                    console.log("Incorrect guess...");
                    console.log("You have " + numGuesses + " guesses remaining.");
                    numGuesses--;
                    inquirerInput(obj);
                }
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
            return;
        }
    }

    isComplete = true;
}

function checkInWord(obj, ltr) {
    var letterObjArray = obj.letters;
    for (i = 0; i < letterObjArray.length; i++) {
        if (letterObjArray[i].letter === ltr) {
            inWord = true;
        }
    }
}

startGame();