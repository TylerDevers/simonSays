/* psuedo code
 * colorChange {
 * 		onclick class changes;
 * 		class reverts to original setting;
 * }
 * 
 * use objects/methods to use dot notation
 * 
 */
 
var yellow = "yellow";
var red = "red";
var blue = "blue";
var green = "green";
var lightYellow = "#FBFB98";
var lightRed = "#FB9595";
var lightBlue = "#98CCFF";
var lightGreen = "#84FA84";

var simonSays = {
		color: "function that sends new color",
		colorToMatch: [], //"empty array to store colors as they are created"
		colorToTest: [], //"empty array to store users picks",
		colorPick: function() { //"chooses random color using arrays"
			var nextColor = [yellow, red, blue, green][Math.floor(Math.random()*4)];
			simonSays.colorToMatch.push(nextColor);
			console.log(simonSays.colorToMatch);
		}
} 



function redChange(element) {
	var color = simonSays.color(element.id);
	console.log("clicked " + color + tile);
	element.style.background = lightRed;
	
	//element.setAttribute("background", "#FF6161");
}

document.getElementById("blue").addEventListener("click", function() {
		simonSays.colorToTest.push('blue');
});

document.getElementById("red").addEventListener("click", function() {
		simonSays.colorToTest.push('red');
});

document.getElementById("yellow").addEventListener("click", function() {
		simonSays.colorToTest.push('yellow');
});

document.getElementById("green").addEventListener("click", function() {
		simonSays.colorToTest.push('green');
});
/*
 * ideas:
 * javascript event listener that will listen for clicks on the div tiles
 * use array for computer sequence, then match to user array of answers.
 * make computer sequence random
 * declare method that detrmines next color in pattern using math.floor and random
 * 		combine this with array of color variables to send generate the new color
 * 		[red, blue, green][Math.floor(math.random() * 4)];
 */
