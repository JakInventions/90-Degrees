
var gameStarted = false;

var playerRotation = 0;

function checkGameStart(){
	
	if(!gameStarted){
		
		startGame();
		
	}
	
}

function startGame(){
	
	gameStarted = true;
	
	document.getElementById("scoreCount").textContent = "0";
	
}


