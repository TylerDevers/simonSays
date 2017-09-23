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
 * 
 * add messaging element to tell user if they have lost
 *  
 */

function nextColor() {
	//adds new colors to game sequence
	var newColor = colors[Math.floor(Math.random()*4)];
	sequence.push(newColor);
	console.log("sequence is " + sequence);
	seqLights();
}

function seqLights() {
	//console.log("seqLights");
	var timer = 0;
	for (var colors in sequence) {
		timer = parseInt(colors)+1;
			activateLight(sequence[colors], timer);
			console.log("seqLights " + sequence[colors]);
	}
}

function activateLight(color, time) {
	//helper function for nextColor and userColor
	//time is set is seqLights(), sets pause between flashes
		switch (color) {
				case "red":
					setTimeout(function(){
						changeColor(color);		
					},500 * time);		
					//console.log("triggered pink");
					break;
				case "blue":
					setTimeout(function(){
						changeColor(color);		
					},500 * time);
					//console.log("triggered blue");
					break;
				case "yellow":
					setTimeout(function(){
						changeColor(color);		
					},500 * time);
					//console.log("triggered yellow");
					break;
				case "green":
					setTimeout(function(){
						changeColor(color);		
					},500 * time);
					//console.log("triggered green");
					break;
		}
	
}

function changeColor(originalColor) {
	//helper function for activateLight
	//setTimeout(function(){
		document.getElementById(originalColor).style.background = light[originalColor];
		setTimeout(function(){
			document.getElementById(originalColor).style.background = originalColor;
		},250);
	//},500);
	
	
	//console.log("changeColor");
}

function userColor(color) {
	//if sequence is empty, begin game
	if (sequence.length<1) {
			nextColor();
	//continues game
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
					setTimeout(nextColor, 1000);
			} else if (sequence[color] != mySeq[color]) {
					console.log("it does not match!");
					mySeq = [];
					sequence = [];
					break;
			} 
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
