
window.addEventListener("orientationchange", function(){
	
	screen.orientation.lock('portrait');
	
});

window.addEventListener("load", function(){
	
	screen.orientation.lock('portrait');
	
	if (AndroidFullScreen) {
		
		AndroidFullScreen.immersiveMode();
		
	}
	
});

function initiateStuff(){
	
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


