
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
				
				else{
					
					notMatched("orange");
					
				}
				
			}
			
			if(overlap(player, purpleProjectile)){
				
				if(colorToHex(player.style.background) == purpleShade.toUpperCase()){
					
					matched("purple");
					
				}
				
				else{
					
					notMatched("purple");
					
				}
				
			}
			
			if(overlap(player, cyanProjectile)){
				
				if(colorToHex(player.style.background) == cyanShade.toUpperCase()){
					
					matched("cyan");
					
				}
				
				else{
					
					notMatched("cyan");
					
				}
				
			}
			
			if(overlap(player, yellowProjectile)){
				
				if(colorToHex(player.style.background) == yellowShade.toUpperCase()){
					
					matched("yellow");
					
				}
				
				else{
					
					notMatched("yellow");
					
				}
				
			}
			
		}
		
		//Acceleration
		
		if(horizonatalProjectileSpeed < window.innerWidth/200 && verticalProjectileSpeed < window.innerHeight/200){
			
			horizonatalProjectileSpeed += 0.0001;
			
			verticalProjectileSpeed += 0.0001;
			
		}
		
		document.getElementById("scoreCount").textContent = score;
		
		await sleep(1);
		
	}
	
}

async function matched(color){
	
	console.log("collided");
	
	if(window.matchMedia("(max-width: 600px)").matches) await sleep(1);
	
	else await sleep(1);
	
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
	
}

async function notMatched(color){
	
	for(var i = 0; i < 100; i++){
		
		if(window.matchMedia("(max-width: 600px)").matches){
			
			if(color == "orange" || color == "cyan") await sleep(125);
			
			else await sleep(250);
			
		}
		
		else{
			
			if(color == "orange" || color == "cyan") await sleep(125);
			
			else await sleep(250);
			
		}
		
		document.getElementById(color + "Projectile").style.opacity = window.getComputedStyle(document.getElementById(color + "Projectile")).getPropertyValue("opacity") - 0.01;
		
	}
	
	await sleep(0);
	
	console.log("ok");
	
}


