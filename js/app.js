
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// Start a new game on clicking of "new game" button
function newGame () {
	$(".new").click(function(){
		// Generate secret number between 1 and 100 
		return Math.floor((Math.random() * 100) + 1);
	});
	// User should get feddback in each guess - choose your own ranges
	$("#guessbutton").click(function(){
		$('#feedback').hide();
		$('#feedback').show('<h2>good guess!</h2>');
	})
}
	
// Game should track how many guesses the user has made should appear in span#count
// Supply user with list of numbers they guessed so far
// Ensure users provide valid inputs between 1 - 100

});


