function caps(string){
   
		    let space = string.indexOf(' ');
			let restOfWords = string.slice(1,space+1);
			let moreWords = string.slice(space+2);
			let secondLetterWord  =  string.charAt(space+1).toUpperCase();
			let firstLetter=  string.charAt(0).toUpperCase();


		     return firstLetter+restOfWords+secondLetterWord+moreWords;

}




