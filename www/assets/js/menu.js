
var gameStarted = false;

//Color codes

var orangeShade = "#f28500";
var purpleShade = "#8A2BE2";
var cyanShade = "#1cbfd0";
var yellowShade = "#edfd5f";

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, ms);
  });
}

async function startIntroAnimation(){
	
	var rotation = 0;
	
	while(true){
		
		rotation++;
		
		document.getElementById("player").setAttribute('style','transform:rotate(' + (rotation * 90) + 'deg)');
		
		if(rotation % 4 == 0) document.getElementById("player").style.background = yellowShade;
		else if(rotation % 4 == 1) document.getElementById("player").style.background = orangeShade;
		else if(rotation % 4 == 2) document.getElementById("player").style.background = purpleShade;
		else if(rotation % 4 == 3) document.getElementById("player").style.background = cyanShade;
		
		await sleep(1500);
		
		/*document.getElementById("player").className = "rotated90";
		
		document.getElementById("player").style.background = "orange";
		
		await sleep(1000);
		
		document.getElementById("player").className = "rotated180";
		
		document.getElementById("player").style.background = "purple";
		
		await sleep(1000);
		
		document.getElementById("player").className = "rotated270";
		
		document.getElementById("player").style.background = "cyan";
		
		await sleep(1000);
		
		document.getElementById("player").className = "rotated360";
		
		document.getElementById("player").style.background = "yellow";
		
		document.getElementById("player").className = "rotated0";*/
		
	}
	
}



