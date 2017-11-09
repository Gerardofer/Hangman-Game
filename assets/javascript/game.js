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


console.log(wordGenerator);

generateUnderScore();



//keyboard activation function
document.onkeyup = function(){
	var pressedKey = event.key.toLowerCase();
	console.log(pressedKey);
	keyIndex();

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

};




//function to convert the word from the pool into "_ _ _ _ _ _ _"

function generateUnderScore(){
	for (var i = 0; i < wordGenerator.length; i++){
		underScore.push("_");
	}
	var targetWord = document.getElementById('wordUnderscore');
	targetWord.innerHTML = "<p id='underscores'>" + underScore + "</p>";
};




