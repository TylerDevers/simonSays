var red = "red", blue = "blue", yellow = "yellow", green = "green", 
		lightYellow = "#FBFB98", lightRed = "#FB9595", lightBlue = "#98CCFF",
		lightGreen = "#84FA84";
var colors = [red, blue, yellow, green], sequence = [], testSequence = [];
var index = 0;
/*
 * the Broad strokes:
 * game sequences will be stored in arrays
 */
function nextColor() {
	var newColor = colors[Math.floor(Math.random()*4)];
	console.log(newColor);
}

function userColor() {
		//send clicked color to testSequence[]
}


// event listeners
document.getElementById("blue").addEventListener("click", function() {
		
});

document.getElementById("red").addEventListener("click", function() {
		
});

document.getElementById("yellow").addEventListener("click", function() {
		
});

document.getElementById("green").addEventListener("click", function() {
		
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
