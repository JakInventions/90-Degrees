
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
		
		function successFunction(){
			
			console.info("It worked!");
			
		}
		
		function errorFunction(error){
			
			console.error(error);
			
		}
		
		function trace(value){
			
			console.log(value);
			
		}
		
		AndroidFullScreen.leanMode(successFunction, errorFunction);
		
	}
	
}


