
function colorToHex(color) {
	
	try{
			
		if (color.substr(0, 1) === '#') {
			return color;
		}
		var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
		
		var red = parseInt(digits[2]);
		var green = parseInt(digits[3]);
		var blue = parseInt(digits[4]);
		
		var rgb = blue | (green << 8) | (red << 16);
		var end = digits[1] + '#' + rgb.toString(16).padStart(6, '0');
		
	}
	
	catch(e){
		
		end = "#ffffff";
		
	}

    return end.toUpperCase();
};

