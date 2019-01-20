
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
		
		document.getElementById("playerPreview").setAttribute('style','transform:rotate(' + (rotation * 90) + 'deg)');
		
		if(rotation % 4 == 0) document.getElementById("playerPreview").style.background = yellowShade;
		else if(rotation % 4 == 1) document.getElementById("playerPreview").style.background = orangeShade;
		else if(rotation % 4 == 2) document.getElementById("playerPreview").style.background = purpleShade;
		else if(rotation % 4 == 3) document.getElementById("playerPreview").style.background = cyanShade;
		
		await sleep(1500);
		
	}
	
}



