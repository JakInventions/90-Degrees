
function showSplashScreens(){
	
	$(function(){
		
		fadeSpeed = 1000;
		
		$("#splashScreen").fadeOut(0);
		
		$("#splashScreen").fadeIn(fadeSpeed, function(){
			
			$("#splashScreen").fadeOut(fadeSpeed, function(){
				
				$("#gameCanvas").fadeOut(0);
		
				$("#gameCanvas").fadeIn(fadeSpeed);
				
				
			});
			
		});
		
	});

}




