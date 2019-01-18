
function showSplashScreens(){
	
	$(function(){
		
		fadeSpeed = 2000;
		
		$("#splashScreen1").fadeOut(0);
		
		$("#splashScreen1").fadeIn(fadeSpeed, function(){
			
			$("#splashScreen1").fadeOut(fadeSpeed, function(){
				
				$("#splashScreen2").fadeOut(0);
		
				$("#splashScreen2").fadeIn(fadeSpeed, function(){$("#splashScreen2").fadeOut(fadeSpeed);});
				
				
			});
			
		});
		
	});

}




