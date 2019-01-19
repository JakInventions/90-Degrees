
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

function checkPlayerMovement(event){
	
	/*
	Key codes
	W - 87
	A - 65
	S - 83
	D - 68
	Up Arrow - 38
	Left Arrow - 37
	Down Arrow - 40
	Right Arrow - 39
	*/
	
	if(gameStarted){
		
		//Up Key or W
		
		if(event.keyCode == 38 || event.keyCode == 87){
			
			turnUp();
			
		}
		
		//Left Key or A
		
		if(event.keyCode == 37 || event.keyCode == 65){
			
			turnLeft();
			
		}
		
		//Down Key or S
		
		if(event.keyCode == 40 || event.keyCode == 83){
			
			turnDown();
			
		}
		
		//Right Key or D
		
		if(event.keyCode == 39 || event.keyCode == 68){
			
			turnRight();
			
		}
		
	}
	
}

function turnUp(){
	
	playerRotation += 90;
	
	document.getElementById("player").setAttribute('style','transform:rotate(' + playerRotation + 'deg)');
	
	document.getElementById("player").style.background = yellowShade;
	
}

function turnLeft(){
	
	playerRotation += 90;
	
	document.getElementById("player").setAttribute('style','transform:rotate(' + playerRotation + 'deg)');
	
	document.getElementById("player").style.background = cyanShade;
	
}

function turnDown(){
	
	playerRotation += 90;
	
	document.getElementById("player").setAttribute('style','transform:rotate(' + playerRotation + 'deg)');
	
	document.getElementById("player").style.background = purpleShade;
	
}

function turnRight(){
	
	playerRotation += 90;
	
	document.getElementById("player").setAttribute('style','transform:rotate(' + playerRotation + 'deg)');
	
	document.getElementById("player").style.background = orangeShade;
	
}


