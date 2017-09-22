var red = "red", blue = "blue", yellow = "yellow", green = "green", 
		lightYellow = "#FBFB98", lightRed = "#FB9595", lightBlue = "#98CCFF",
		lightGreen = "#84FA84";
var colors = [red, blue, yellow, green], sequence = [], mySeq = [];
var index = 0;

/*
 * TODO:
 * create start button to begin game.
 * when game started:
 * 		nextColor() called automatically
 * 		while mySeq.length < sequence.length, allow userColor to run.
 * 		when mySeq.length == sequence.length, run checkSequence
 * 		if mySeq is correct, reset mySeq and run nextColor again
 * 		if mySeq not correct, reset mySeq and sequence, and return message.
 */
 
function nextColor() {
	//adds new colors to game sequence
	var newColor = colors[Math.floor(Math.random()*4)];
	sequence.push(newColor);
	for (color in sequence) {
			console.log(sequence[color]);
	}
	console.log("sequence is " + sequence);
}

function userColor(color) {
	//send clicked color to mySeq[]
	//if sequence is empty, begin game
	if (sequence.length<1) {
			nextColor();
	} else if (mySeq.length < sequence.length) {
			mySeq.push(color);
			console.log(color);
			if (mySeq.length == sequence.length) {
				console.log("my sequence " + mySeq);
				checkSequence();
			}
	} else if (mySeq.length >= sequence.length) {
			console.log("need to run nextColor()");
	}
	//mySeq.push(color);
	//index ++;
	
}

function checkSequence() {
		//will check if arrays match using index value.
		var lastColor = sequence.length - 1;
		
		for (color in sequence) {
			if (sequence[color] == mySeq[color] && color == lastColor) {
					console.log("sequence's are a match!");
					mySeq = [];
					nextColor();
			} else if (sequence[color] != mySeq[color]) {
						console.log("it does not match!");
						mySeq = [];
						sequence = [];
						break;
			} 
		} 
		
		//reset my sequence array
		
}

// event listeners
document.getElementById("blue").addEventListener("click", function() {
	userColor('blue');
});

document.getElementById("red").addEventListener("click", function() {
	userColor('red');
});

document.getElementById("yellow").addEventListener("click", function() {
	userColor('yellow');
});

document.getElementById("green").addEventListener("click", function() {
	userColor('green');
});


/*
 * use arrays to store game sequence and user inputs
 * make code readable via many functions
 * still use event listeners.
 * 
 * 
 * 
 * working on gameplay. gamelogic is iffy.
 * ideas:
 * javascript event listener that will listen for clicks on the div tiles
 * use array for computer sequence, then match to user array of answers.
 * make computer sequence random
 * declare method that detrmines next color in pattern using math.floor and random
 * 		combine this with array of color variables to send generate the new color
 * 		[red, blue, green][Math.floor(math.random() * 4)];
 */
