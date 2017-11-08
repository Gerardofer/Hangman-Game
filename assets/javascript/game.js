// Hangman game

// 1.- create a pool of words to be used
// 2.- create a var that will randomize the order of output for arr
// 3.- create a function that activates the game once a letter is pressed
// 4.- create a function that grabs the word from the array
// 5.- create a function that checks if "pressedKey" is present within the chosen word

//Pool of words
var arr = ["beethoven", "mozart", "brahms", "lizst", "chopin", "rachmaninov", "Tchaikovski", "mendelson", "bach"];

//Random word generator
var wordGenerator = arr[Math.floor(Math.random() * arr.length)];

//keyboard activation function
document.onkeyup = function(){
	var pressedKey = event.key.toLowerCase();
	var word = wordGenerator;

	for (var i = 0; i < word.length; i++){
		var neWord = word.replace(word[i], "_");
		document.write(neWord[i]);
	}

	// var isPresent = arr.includes(pressedKey);

	// var index = .indexOf(pressedKey);

	// console.log(pressedKey);
	// // console.log(isPresent);
	// console.log(word);
	// console.log(index);
	
};

// function aFunction(){
// 	var word = wordGenerator;
// 	for (var i = 0; i < word.length; i++);
// 		var neWord = word.map(function(x){return x.replace(/word/g, "_ ")});
// 	console.log(neWord);

// }