const prompt = require('prompt-sync')();

var word = "elefante";

console.log("Welcome to Hangman!");

// while loop

var letter = prompt("Enter a letter: ");
var lifes = 5;
letterIndex = word.indexOf(letter);
letterGrab = word.substring(letterIndex, letterIndex + 1);
letterOut = word.replace(letterGrab, "");


// if(word.indexOf(letter) === true) {
// 	lifes = lifes--
// 	console.log("You have " + lifes + " left!")
// } else {
// 	while (word.indexOf(letter)) {
// 	word = word.replace(letter, "")
// 	}
// }



while (word.includes(letterGrab) == true) {
	word = letterOut;
	letterIndex;

	if (true) {
		break;
	}
	
} 









console.log(letterGrab)
console.log(letterOut)
console.log(word)
word = letterOut
console.log(word)



// while (lifes > 0 && word != "" )



// - DONE! pedir letra con prompt
// - si la letra esta en la palabra (indexOf)
//   substring replace la letra con ""
// - convertirla en funcion con una
// 	 palabra como parametro
// - while loop del programa con break si type exit
// - variable counter de vidas
// - if no more vidas game over while loop break
// - if word is undefined you won!!!! break loop