var red = "red", blue = "blue", yellow = "yellow", green = "green", 
		lightyellow = "#FBFB98", lightred = "#FB9595", lightblue = "#98CCFF",
		lightgreen = "#84FA84";
var colors = [red, blue, yellow, green], sequence = [], mySeq = [];
var index = 0, counter = 0;
var oldColor;
var light = {
		red: "pink", blue: "lightBlue", yellow: "lightYellow", green: "lightGreen"
		};
var sound1 = new Audio('simonSound1.mp3'), sound2 = new Audio('simonSound2.mp3'),
		sound3 = new Audio('simonSound3.mp3'), sound4 = new Audio('simonSound4.mp3');
/*
 * TODO:
 * add reset button
 * add strict mode 
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
						sound1.play();
						changeColor(color);		
					},700 * time);		
					//console.log("triggered pink");
					break;
				case "blue":
					setTimeout(function(){
						sound2.play();	
						changeColor(color);	
					},700 * time);
					//console.log("triggered blue");
					break;
				case "yellow":
					setTimeout(function(){
						sound3.play();		
						changeColor(color);
					},700 * time);
					//console.log("triggered yellow");
					break;
				case "green":
					setTimeout(function(){
						sound4.play();
						changeColor(color);		
					},700 * time);
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
			document.getElementById("msg-screen").innerHTML = "";
			document.getElementById("counter").innerHTML = counter;
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
					counter++;
					document.getElementById("counter").innerHTML = counter;
					console.log(counter);
					if (counter >= 20) {
						document.getElementById("msg-screen").innerHTML = "Congratulations! You Beat Me! Click a color to play again.";
						mySeq = [];
						sequence = [];
						counter = 0;
						break;
					}else {
						setTimeout(nextColor, 1000);
					}
			} else if (sequence[color] != mySeq[color]) {
					document.getElementById("msg-screen").innerHTML = "Oh no! Your sequence did not match! Click a color to play again.";
					console.log("it does not match!");
					mySeq = [];
					sequence = [];
					counter = 0;
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
