
function launchGame(){
	
	transitionOutHref("previewCanvas", "game.html");
	
}

function transitionOutHref(oldContainer, target){
	
	$(function(){
		
		$("#" + oldContainer).fadeOut(500, function() {
			
			location.href = target;
			
		});
		
	});
	
}

function transitionOut(oldContainer){
	
	$(function(){
		
		$("#" + oldContainer).fadeOut(500);
		
	});
	
}

function transitionIn(newContainer){
	
	$(function(){
		
		$("#" + newContainer).fadeOut(0);
		
		$("#" + newContainer).fadeIn(500);
		
	});
	
}




