
function initiateStuff(){
	
	transitionIn('gameCanvas');
	
	if(!!window.cordova){
		
        console.log("In cordova");
		
		inCordova = true;
		
    }
	
   else{
		
		console.log("Not in cordova");
		
		inCordova = false;
		
	}
	
	if(inCordova){
		
		screen.orientation.lock('portrait');
		
		AndroidFullScreen.leanMode(successFunction, errorFunction);
		
	}
	
}


