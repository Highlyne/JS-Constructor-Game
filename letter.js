// This constructor will be able to either display an underlying character or a blank placeholder, depending on whether or not the user has guessed the letter. 

var userGuess = process.argv[2];
// console.log(userGuess);

function Letter (char) {
// Holds a string to store the correct character for the letter
    this.character = char;
// A boolean value that stores whether that letter has been guessed yet
    this.letterIsRight = false;
// Returns the underlying character if the letter has been guessed, if not, or a placeholder.
    this.showChar = function() {
        if (this.letterIsRight) {
            console.log(" Correct Letter " + this.character);
            console.log("User guess " + userGuess);
        } else {
            console.log("-");
            console.log(" Correct Letter " + this.character);
            console.log(" Correct Letter " + this.letterIsRight);
            console.log(" Correct Letter " + userGuess);
        }
    }
// Checks user guess against the underlying character, updating the stored boolean value to true
    this.checkLetter = function(userGuess) {
        if (this.character === userGuess) {
            this.letterIsRight = true;
            this.showChar();
        }
    }
};

var B = new Letter("b");

B.checkLetter(userGuess);