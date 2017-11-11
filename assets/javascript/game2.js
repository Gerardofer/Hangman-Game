//Global Variables
//===========================================================

var composers = ["mozart", "bach", "ravel", "berlioz", "mendelson", "scriabin", "brahms", "shubert", "schumann", "chopin", "haydn", "verdi"];
var guessWord = composers[Math.floor(Math.random() * composers.length)]
var guessWordUnder = [];
var wins = 0;
var losses = 0;
var letters = '';
var attempts = 15;
var docUnderScore = document.getElementById('wordUnderscore');
var warning = document.getElementById('warning');
var targetAttempts = document.getElementById('guesses');
var targetWins = document.getElementById('winsCounter');
var targetLoss = document.getElementById('loss');
var tagetLetter = document.getElementById('used');
var targerWarning = document.getElementById('warning');
var targetReset = document.getElementById('start')


console.log(guessWord);


//function to get underscores
function underScore(){
	for (var i = 0; i < guessWord.length; i++){
		guessWordUnder.push("_");
	}return guessWordUnder;
}

console.log(underScore());

//User interaction
document.onkeyup = function(){
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userInput);	

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

	// if (userInput == "1234567890"){
	// 	warning.innerHTML = '<p>Try again!, only characters will work in this game!</p>'

		if (userInput){
			attempts--;
			letters += userInput;
			targetAttempts.innerHTML = attempts;
			tagetLetter.innerHTML = letters;
		}
		if (guessWordUnder.join("") == guessWord){
			wins++;
			targetWins.innerHTML = wins;
		}
		if (attempts <= 0){
			losses++;
			targetLoss.innerHTML = losses;
		}
};

function gameReset(){
		if (guessWordUnder.join("") == guessWord || attempts <= 0){
			attempts = 15;
			letters = '';
			
		}
		targetReset.innerHTML = "<p>Please press the spacebar for a new word</p>"
		document.onkeyup = function(){
			if (e.keyCode == 32){
				guessWordUnder = [];
			}
		}
	};
// gameReset();
	



