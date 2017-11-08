//Hangman game

//********** Steps ***********

// 1.- Generate a word
// 2.- ask for user input and keep track of the letters
// 3.- chech user input with the word provided
// 4.- if user input matches a letter from the word, reveal letter, otherwise decrease chances
// 5.- if chances are spent, increase losses, otherwise if word is revealed increase wins
// 6.- generate a new word

var composer = ["beethoven", "bach", "chopin", "scarlati", "mendelson", "mozart", "scriabin", "lizst", "brahms", "schumman", "shubert"];
var beethoven = "";
var userLetters = "";
var missed = 0;
var losses = 0;

document.onkeyup = function(){
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	randomWord();

	if (userInput === composer[0][0] || userInput === composer[0][1] || userInput === composer[0][2] || userInput === composer[0][3] || userInput === composer[0][4] || userInput === composer[0][5] || userInput === composer[0][6] || userInput === composer[0][7] || userInput === composer[0][8] || userInput === composer[0][9]){
		beethoven += userInput;
		console.log(beethoven);
	}

	else {
		userLetters += userInput;
		console.log(userLetters);
	} 

	// document.getElementById("#letters").innerHTML = userLetters;
};


function randomWord(){
	var wordGenerator = composer[Math.floor(Math.random() * composer.length)];
		if (event.keyCode === 32){
			var newWord = "<p id='currentWord'>Current Word:</p>" + "<p>" + wordGenerator + "</p>";
			document.querySelector("#dashboard").innerHTML = newWord; 
		}
};





		







	

