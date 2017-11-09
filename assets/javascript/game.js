// Hangman game

// Pool of words
var arr = ["beethoven", "mozart", "brahms", "lizst", "chopin", "rachmaninov", "tchaikovski", "mendelson", "bach"];

//Random word generator
var numGenerator = Math.floor(Math.random() * arr.length);
var wordGenerator = arr[numGenerator];

//empty array variable where the "_" will be stored based on the length of the arr
var underScore = [];

//variable to store letters used
var lettersUsed = "";

//Variable to track the guesses
var guesses = 15;

//Variable to keep track of the wins
var wins = 0;


console.log(wordGenerator);

generateUnderScore();

//keyboard activation function
document.onkeyup = function(){
	var pressedKey = event.key.toLowerCase();
	console.log(pressedKey);
	console.log(Count());
	keyIndex();
	// guessCount();

//function to find the index in the string and replace the underscore with the index
	function keyIndex(){	
		for (var i = 0; i < wordGenerator.length; i++){
			var index = wordGenerator.indexOf(pressedKey);
			if (index !== -1){
				underScore[index] = pressedKey;
			}
			var targetUnderscore = document.getElementById('wordUnderscore');
			targetUnderscore.innerHTML = "<p id='underscores'>" + underScore + "</p>";
		}
	};

	function Count(){
		if (pressedKey){
			guesses--;
			lettersUsed += pressedKey
			console.log(guesses);
			console.log(lettersUsed);
		}
		var guessLeft = document.getElementById('guesses');
		guessLeft.innerHTML = guesses;

		var letter = document.getElementById('used');
		letter.innerHTML = lettersUsed;
	};
};




//function to convert the word from the pool into "_ _ _ _ _ _ _"

function generateUnderScore(){
	for (var i = 0; i < wordGenerator.length; i++){
		underScore.push("_");
	}
	var targetWord = document.getElementById('wordUnderscore');
	targetWord.innerHTML = "<p id='underscores'>" + underScore + "</p>";
};




