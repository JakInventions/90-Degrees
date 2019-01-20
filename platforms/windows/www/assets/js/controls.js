
var tapStartX = 0;

var tapStartY = 0;

var verticalSwipeLenth = window.innerHeight / 10;

var horizontalSwipeLenth = window.innerWidth / 10;

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

function swipeStart(event){
	
	verticalSwipeLenth = window.innerHeight / 10;

	horizontalSwipeLenth = window.innerWidth / 10;
	
	tapStartX = event.pageX;
	
	tapStartY = event.pageY;
	
}

function swipeFinsish(event){
	
	if(event.pageX - tapStartX >= horizontalSwipeLenth){
		
		turnRight();
		
	}
	
	else if(tapStartX - event.pageX >= horizontalSwipeLenth){
		
		turnLeft();
		
	}
	
	else if(event.pageY - tapStartY >= verticalSwipeLenth){
		
		turnDown();
		
	}
	
	else if(tapStartY - event.pageY >= verticalSwipeLenth){
		
		turnUp();
		
	}
	
}

function touchSwipeStart(event){
	
	verticalSwipeLenth = window.innerHeight / 10;

	horizontalSwipeLenth = window.innerWidth / 10;
	
	tapStartX = event.touches[0].clientX;
	
	tapStartY = event.touches[0].clientY;
	
}

function touchSwipeEnd(event){
	
	if(event.changedTouches[0].clientX - tapStartX >= horizontalSwipeLenth){
		
		turnRight();
		
	}
	
	else if(tapStartX - event.changedTouches[0].clientX >= horizontalSwipeLenth){
		
		turnLeft();
		
	}
	
	else if(event.changedTouches[0].clientY - tapStartY >= verticalSwipeLenth){
		
		turnDown();
		
	}
	
	else if(tapStartY - event.changedTouches[0].clientY >= verticalSwipeLenth){
		
		turnUp();
		
	}
	
}

