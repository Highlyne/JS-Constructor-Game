var Letter = require("./letter");

// Word constructor depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var currentWord = "Happy";
var wordSplit = currentWord.split("");
console.log(wordSplit[3]);
var p = new Letter(wordSplit[3]);
console.log(p);

var Word = function () {
    this.letters = [wordSplit.forEach(function(element){
        // new Letter(element);
    })];
    // this.wordString = function (){
    //     letters.forEach(function(element) {
    //         console.log(element);
    //         var string =+ element.showChar();
    //         return string
    //       });
       
    // };
    // this.character = function (c) {
    //     c.checkLetter()
    // }
};

// var gameWord = new Word(currentWord);

// console.log("Here is the gameword constructor " + gameWord.letters[1]);