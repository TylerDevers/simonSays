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
 * 		while mhySeq.length < sequence.length, allow userColor to run.
 * 		when mySeq.length == sequence.length, run checkSequence
 * 		if mySeq is correct, reset mySeq and run nextColor again
 * 		if mySeq not correct, reset mySeq and sequence, and return message.
 */
 
function nextColor() {
	//adds new colors to game sequence
	var newColor = colors[Math.floor(Math.random()*4)];
	sequence.push(newColor);
	console.log("sequence is " + sequence);
}

function userColor(color) {
	//send clicked color to mySeq[]
	mySeq.push(color);
	index ++;
	console.log("my sequence " + mySeq);
}

function checkSequence() {
		//will check if arrays match using index value.
		if (mySeq[index] == sequence[index]) {
				console.log("it matches");
		} else {
				console.log("it does not match!!");
		}
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
