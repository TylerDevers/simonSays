var red = "red", blue = "blue", yellow = "yellow", green = "green", 
		lightyellow = "#FBFB98", lightRed = "#FB9595", lightblue = "#98CCFF",
		lightgreen = "#84FA84";
var colors = [red, blue, yellow, green], sequence = [], mySeq = [];
var index = 0;
var oldColor;
var light = {
		red: "pink", blue: "lightBlue", yellow: "lightYellow", green: "lightGreen"
		};

/*
 * TODO:
 * activateLights() when nextColor is pushed
 * lights are buggy, fix light timing issue
 * timeout is messing with user experience, to slow to respondv
 */

function nextColor() {
	//adds new colors to game sequence
	var newColor = colors[Math.floor(Math.random()*4)];
	sequence.push(newColor);
	//activateLight(newColor);
	for (color in sequence) {
			console.log(sequence[color]);
	}
	console.log("sequence is " + sequence);
	for (color in sequence) {
		activateLight(sequence[color]);
	}
}

function userColor(color) {
	//send clicked color to mySeq[]
	//if sequence is empty, begin game
	if (sequence.length<1) {
			nextColor();
	} else if (mySeq.length < sequence.length) {
			mySeq.push(color);
			activateLight(color);
			//console.log(color);
			if (mySeq.length == sequence.length) {
				console.log("my sequence " + mySeq);
				setTimeout(checkSequence, 500);
			}
	} else if (mySeq.length >= sequence.length) {
			console.log("need to run nextColor()");
	}
}

function checkSequence() {
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
}

function changeColor(color) {
	//helper function for activateLight
	oldColor = color;
	document.getElementById(color).style.background = light[color];
	setTimeout(darkenColor, 500);
	//console.log(oldColor);
}

function darkenColor() {
	//helper function for changeColor
	document.getElementById(oldColor).style.background = oldColor;
	//console.log("darken " + oldColor);
}

function activateLight(color) {
	//helper function for nextColor and userColor
	switch (color) {
			case "red":
				setTimeout(function(){
						changeColor(color);
				}, 500);
				
				//console.log("triggered pink");
				break;
			case "blue":
				setTimeout(function(){
						changeColor(color);
				}, 500);
				//console.log("triggered blue");
				break;
			case "yellow":
				setTimeout(function(){
						changeColor(color);
				}, 500);
				//console.log("triggered yellow");
				break;
			case "green":
				setTimeout(function(){
						changeColor(color);
				}, 500);
				//console.log("triggered green");
				break;
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
