 
var yellow = "yellow";
var red = "red", blue = "blue", yellow = "yellow", green = "green";
var lightYellow = "#FBFB98", lightRed = "#FB9595", lightBlue = "#98CCFF",
		lightGreen = "#84FA84";
var index = 0;

var game = {
	gamePlay: function() {
		//starts new  game
			if (game.colorSeq == 0) {
					game.round();
			} else {
					if (game.colorSeq[index] == game.seqTest[index]) {
						console.log("correct ");
						
					}
			}
	},
	colorSeq: [], // store  game colors
	seqTest: [], // store users picks
	round: function() { // chooses random color
		var newColor = [yellow, red, blue, green][Math.floor(Math.random()*4)];
		index ++;
		game.colorSeq.push(newColor);
		console.log(game.colorSeq);
	}
} 

//game logic


// event listeners
document.getElementById("blue").addEventListener("click", function() {
		game.seqTest.push('blue');
		game.gamePlay();
});

document.getElementById("red").addEventListener("click", function() {
		game.seqTest.push('red');
		game.gamePlay();
});

document.getElementById("yellow").addEventListener("click", function() {
		game.seqTest.push('yellow');
		game.gamePlay();
});

document.getElementById("green").addEventListener("click", function() {
		game.seqTest.push('green');
		game.gamePlay();
});
/*
 * working on gameplay. gamelogic is iffy.
 * ideas:
 * javascript event listener that will listen for clicks on the div tiles
 * use array for computer sequence, then match to user array of answers.
 * make computer sequence random
 * declare method that detrmines next color in pattern using math.floor and random
 * 		combine this with array of color variables to send generate the new color
 * 		[red, blue, green][Math.floor(math.random() * 4)];
 */
