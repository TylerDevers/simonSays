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
		color: function(color) {
			console.log(color);
		}
} 
 
function redChange(element) {
	var color = simonSays.color(element.id);
	console.log("clicked " + color + tile);
	element.style.background = lightRed;
	
	//element.setAttribute("background", "#FF6161");
}

/*
 * ideas:
 * 
