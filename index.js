var Word = require("./word.js");
var inquirer = require("inquirer");

var wordsToGuess = ["Impala", "Toad", "Elk", "Ant", "Rhino", "Python", "Goat", "Lama", "Serpent", "Gecko", "PIG", "Raptor", "Penguin", "Cheetah", "Porcupine", "Orca", "Seagull", "Squirrel", "Mouse", "Pike", "Lynx", "ASP", "Falcon", "Cobra", "Sloth"];

var numGuesses = 6;

function startGame() {
    console.log("Guess the programming language with an animal in their logo.");
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
            console.log(obj);
            obj.checkAllLetters(response.letterInput);
            obj.returnString();

            numGuesses--;
            if (numGuesses > 0) {
                inquirerInput(obj);
            }
            else {
                newGame();
            }



        })
};

function newGame() {

}

startGame();