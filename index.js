var Word = require("./word.js");
var inquirer = require("inquirer");

var word = new Word("Robotic");

/*
word.getLetters();
console.log(word.returnString());
word.checkAllLetters("O");
console.log(word.returnString());
*/
var wordsToGuess = ["Impala", "Toad", "Elk", "Ant", "Rhino", "Python", "Goat", "Lama", "Serpent", "Gecko", "PIG", "Raptor", "Penguin", "Cheetah", "Porcupine", "Orca", "Seagull", "Squirrel", "Mouse", "Pike", "Lynx", "ASP", "Falcon", "Cobra", "Sloth"];

function startGame() {
    console.log("Guess the programming language with an animal in their logo.");
    var 


}

function inquirerInput() {
    inquirer
        .prompt([{
            type: "input",
            name: "letterInput",
            message: "Please guess a letter",
        },
        ])
        .then(function(response) {

            word.checkAllLetters(response.letterInput);
            console.log(word.returnString());
            inquirerInput();


        })
};

inquirerInput();
