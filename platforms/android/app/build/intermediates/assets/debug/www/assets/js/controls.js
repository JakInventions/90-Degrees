
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
	
	deltaX = event.pageX - tapStartX;
	
	deltaY = event.pageY - tapStartY;
	
	if(deltaX > 0 && deltaX >= horizontalSwipeLenth && Math.abs(deltaX) >= Math.abs(deltaY)){
		
		turnRight();
		
	}
	
	else if(deltaX < 0 && Math.abs(deltaX) >= horizontalSwipeLenth && Math.abs(deltaX) >= Math.abs(deltaY)){
		
		turnLeft();
		
	}
	
	else if(deltaY > 0 && deltaY >= verticalSwipeLenth && Math.abs(deltaY) >= Math.abs(deltaX)){
		
		turnDown();
		
	}
	
	else if(deltaY < 0 && Math.abs(deltaY) >= verticalSwipeLenth && Math.abs(deltaY) >= Math.abs(deltaX)){
		
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
	
	deltaX = event.changedTouches[0].clientX - tapStartX;
	
	deltaY = event.changedTouches[0].clientY - tapStartY;
	
	if(deltaX > 0 && deltaX >= horizontalSwipeLenth){
		
		turnRight();
		
	}
	
	else if(deltaX < 0 && Math.abs(deltaX) >= horizontalSwipeLenth){
		
		turnLeft();
		
	}
	
	else if(deltaY > 0 && deltaY >= verticalSwipeLenth){
		
		turnDown();
		
	}
	
	else if(deltaY < 0 && Math.abs(deltaY) >= verticalSwipeLenth){
		
		turnUp();
		
	}
	
}

