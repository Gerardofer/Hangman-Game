//Global Variables
//===========================================================

var composers = ["mozart", "bach", "ravel", "berlioz", "mendelson", "scriabin", "brahms", "shubert", "schumann", "chopin", "haydn", "verdi"];
var randNum = Math.floor(Math.random() * composers.length);
var guessWord = composers[randNum];
var guessWordUnder = [];
var userInput;
var wins = 0;
var losses = 0;
var letters = [];
var attempts = 15;
var docUnderScore = document.getElementById('wordUnderscore');
var warning = document.getElementById('warning');
var targetAttempts = document.getElementById('guesses');
var targetWins = document.getElementById('winsCounter');
var targetLoss = document.getElementById('loss');
var tagetLetter = document.getElementById('used');


//============================================================

console.log(guessWord);


//function to get underscores
function underScore(){
	for (var i = 0; i < guessWord.length; i++){
		guessWordUnder.push("_");
	}return guessWordUnder;
}

console.log(underScore());


function progress(){
	
	if (guessWordUnder.join("") == guessWord){
			wins++;
			attempts = 15;
			letters = [];
			alert("You win!!!");
			targetWins.innerHTML = wins;
			
			
	}
	else if (attempts <= 0){
			losses++;
			attempts = 15;
			letters = [];
			alert("That's ok, try again");
			targetLoss.innerHTML = losses;
				
	}
};

targetWins.innerHTML = wins;
targetLoss.innerHTML = losses;

function userGuessA(){
		for (var i = 0; i < guessWordUnder.length; i++){
			var index = guessWord.indexOf(userInput);
		}if (index !== -1){
			guessWordUnder[index] = userInput;
		}
		 docUnderScore.innerHTML = "<p id='underscores'>" + guessWordUnder.join("") + "</p>";
	};

	userGuessA();






function userGuessB(){
		for (var i = 0; i < guessWordUnder.length; i++){
			var index = guessWord.lastIndexOf(userInput);
		}if (index !== -1){
			guessWordUnder[index] = userInput;
		}
		 docUnderScore.innerHTML = "<p id='underscores'>" + guessWordUnder.join("") + "</p>";
	};

	userGuessB();

	


//User interaction
document.onkeyup = function(){
	userInput = String.fromCharCode(event.keyCode).toLowerCase();
	userGuessA();
	userGuessB();
	progress();

	if (userInput){
			attempts--;
			letters.push(userInput);
			targetAttempts.innerHTML = attempts;
			tagetLetter.innerHTML = letters;
	}

}

targetAttempts.innerHTML = attempts;
tagetLetter.innerHTML = letters;
//need to stop the flow of input from the user

//Need to create a function that will reset the game and will generate a new word












