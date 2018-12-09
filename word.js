var Letter = require("./letter");

// The Word constructor leverages the Letter constructor. It generates an object representing
// the current word the user is attempting to guess. With in that object are methods calling upon
// the Letter constructor.




// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// ++++++++ Set up the current word in play ++++++++++++++++

var currentWord = "Happy";
var wordSplit = currentWord.split("");
console.log(wordSplit[3]);

// ++++++++ Set up the Word constructor ++++++++++++++++++++

var Word = function () {
    // An array of new Letter objects for each of the letters of the current word in play
    this.letters = wordSplit.map(x => new Letter(x));
    // A function that returns a string representing the word in play. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.wordCharArray = this.letters.map(x => x.showChar());
    this.charString = function (){
        var string = this.wordCharArray.join(' ');
      return string
    };
    // this.character = function (c) {
    //     c.checkLetter()
    // }
};

var gameWord = new Word(currentWord);

console.log(gameWord.charString());

