// Hangman game

// Pool of words
var arr = ["beethoven", "mozart", "brahms", "lizst", "chopin", "rachmaninov", "tchaikovski", "mendelson", "bach"];

//Random word generator
var numGenerator = Math.floor(Math.random() * arr.length);
var wordGenerator = arr[numGenerator];

//empty array variable where the "_" will be stored based on the length of the arr
var underScore = [];
// var noComasUnderScore = underScore.split().join(" ");
console.log(wordGenerator);



//keyboard activation function
document.onkeyup = function(){
	var pressedKey = event.key.toLowerCase();
	console.log(pressedKey);


	if (event.keyCode === 32){
		generateUnderScore();
	}

	function keyIndex(){	
		for (var i = 0; i < wordGenerator.length; i++){
		var index = wordGenerator.indexOf(pressedKey);
		console.log(index);
		}
	};
};
// 	console.log(pressedKey);
// 	console.log(wordGenerator);
// 	underScore();
// 	keyIndex();

// //function to find the position of the user input letter
// function keyIndex(){	
// 	for (var i = 0; i < wordGenerator.length; i++){
// 	var index = wordGenerator.indexOf(pressedKey);
// 	console.log(index);
// 	}
// };
		



//function to convert the word from the pool into "_ _ _ _ _ _ _"

function generateUnderScore(){
	for (var i = 0; i < wordGenerator.length; i++){
		underScore.push("_");
	}
	var targetWord = document.getElementById('wordUnderscore');
	targetWord.innerHTML = "<p id='underscores'>" + underScore + "</p>";
};




