
function showSplashScreens(){
	
	$(function(){
		
		fadeSpeed = 1000;
		
		$("#splashScreen").fadeOut(0);
		
		$("#splashScreen").fadeIn(fadeSpeed, function(){
			
			$("#splashScreen").fadeOut(fadeSpeed, function(){
				
				$("#previewCanvas").fadeOut(0);
		
				$("#previewCanvas").fadeIn(fadeSpeed, function(){
					
					startIntroAnimation();
					
				});
				
				
			});
			
		});
		
	});

}




