const extendHex = (shortHex) => {
  // write your code here
	let hex = "#";
	if(shortHex.charAt(0) !== '#'){
		shortHex = '#' + shortHex;
	}
	
	let code = shortHex.charCodeAt(1);
	if(code >= 65 && code <= 90){
		shortHex = shortHex.toUpperCase();
	}
	else if(code >= 97 && code <= 122){
		shortHex = shortHex.toLowerCase();
	}
	
	for(let i=1; i<shortHex.length; i++){
		let ch = shortHex.charAt(i);
		hex += ch + ch;
	}

	return hex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
