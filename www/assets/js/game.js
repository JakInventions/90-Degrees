
var gameStarted = false;

var paused = false;

var launchProjectile = false;

var playerRotation = 0;

var whichProjectile = 0;

var score = 0;

var horizonatalProjectileSpeed = window.innerWidth/1000;

var verticalProjectileSpeed = window.innerHeight/1000;

if(horizonatalProjectileSpeed < 1) horizonatalProjectileSpeed += 0.5;

if(verticalProjectileSpeed < 1) verticalProjectileSpeed += 0.5;

var whichColorProjectile = "";

function checkGameStart(){
	
	if(!gameStarted){
		
		startGame();
		
	}
	
}

async function startGame(){
	
	//Projectile Variables
	
	orangeProjectile = document.getElementById("orangeProjectile");
	
	purpleProjectile = document.getElementById("purpleProjectile");
	
	cyanProjectile = document.getElementById("cyanProjectile");
	
	yellowProjectile = document.getElementById("yellowProjectile");
	
	player = document.getElementById("player");
	
	gameStarted = true;
	
	paused = false;
	
	launchProjectile = true;
	
	document.getElementById("scoreCount").textContent = "0";
	
	//Game loop
	
	while(gameStarted && !paused){
		
		if(launchProjectile){
			
			whichProjectile = parseInt((Math.random() * 4) + 1);
			
			if(whichProjectile == 1) whichColorProjectile = "orange";
			
			else if(whichProjectile == 2) whichColorProjectile = "purple";
			
			else if(whichProjectile == 3) whichColorProjectile = "cyan";
			
			else if(whichProjectile == 4) whichColorProjectile = "yellow";
			
			launchProjectile = false;
			
		}
		
		if(!launchProjectile){
			
			if(whichColorProjectile == "orange"){
				
				orangeProjectile.style.left = orangeProjectile.offsetLeft - horizonatalProjectileSpeed;
				
			}
			
			else if(whichColorProjectile == "purple"){
				
				purpleProjectile.style.top = purpleProjectile.offsetTop - verticalProjectileSpeed;
				
			}
			
			else if(whichColorProjectile == "cyan"){
				
				cyanProjectile.style.marginLeft = cyanProjectile.offsetLeft + horizonatalProjectileSpeed;
				
			}
			
			else if(whichColorProjectile == "yellow"){
				
				yellowProjectile.style.marginTop = yellowProjectile.offsetTop + verticalProjectileSpeed;
				
			}
			
			//Collisions
			
			if(overlap(player, orangeProjectile)){
				
				if(colorToHex(player.style.background) == orangeShade.toUpperCase()){
					
					matched("orange");
					
				}
				
			}
			
			if(overlap(player, purpleProjectile)){
				
				if(colorToHex(player.style.background) == purpleShade.toUpperCase()){
					
					matched("purple");
					
				}
				
			}
			
			if(overlap(player, cyanProjectile)){
				
				if(colorToHex(player.style.background) == cyanShade.toUpperCase()){
					
					matched("cyan");
					
				}
				
			}
			
			if(overlap(player, yellowProjectile)){
				
				if(colorToHex(player.style.background) == yellowShade.toUpperCase()){
					
					matched("yellow");
					
				}
				
			}
			
		}
		
		document.getElementById("scoreCount").textContent = score;
		
		await sleep(1);
		
	}
	
}

async function matched(color){
	
	if(window.matchMedia("(max-width: 600px)").matches) await sleep(verticalProjectileSpeed * 200);
	
	else await sleep(verticalProjectileSpeed * 95);
	
	if(overlap(player, document.getElementById(color + "Projectile"))){
		
		score++;
		
		launchProjectile = true;
		
		orangeProjectile.style.left = "100vw";
		
		orangeProjectile.style.marginLeft = "0px";
		
		purpleProjectile.style.top = "100vh";
		
		purpleProjectile.style.marginTop = "0px";
		
		cyanProjectile.style.left = "0vw";
		
		cyanProjectile.style.marginLeft = "-25px";
		
		yellowProjectile.style.top = "0vh";
		
		yellowProjectile.style.marginTop = "-25px";
		
	}
	
	if(color == "orange"){
		
		
		
	}
	
	else if(color == "purple"){
		
		
		
	}
	
	else if(color == "cyan"){
		
		
		
	}
	
	else if(color == "yellow"){
		
		
		
	}
	
}


