prompt = require("prompt-sync")();


remainingLetters = ["d", "o", "g"];
palabra = "dog";
lives = 5;

while(lives > 0 ) {
	// ask letter
	x = prompt("Enter a letter: ");


	if (palabra.indexOf(x) == -1) {
		lives--;
		console.log("You have" + lives + "left");
	} else {
		// remove something from array
		i = remainingLetters.indexOf(x);
		remainingLetters.splice(i, 1);
	}

	// check si won
	if (remainingLetters.length == 0) {
		console.log("You won!");
		break;
	}

}










// indexof, si es -1 no esta, si no, esta















