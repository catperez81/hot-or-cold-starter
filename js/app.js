
$(document).ready(function(){
	var randomNumber = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	$('.new').click(function(){	
		randomNumber = newGame();
		console.log(randomNumber);
	});

	// Start a new game on clicking of "new game" button
	function newGame () {
		
	// Generate secret number between 1 and 100
	// $('<input type="text" class = "text'+ (++i) +'" onclick="this.value=\'\'" value="Enter Choice #' + i + '"/>');
	
		return Math.floor((Math.random() * 100) + 1);
	});

// clear field on new game
	$('.new').click(function(){
	$('#userGuess').remove();	
	});

	// User should get feedback in each guess - choose your own ranges
	// $("#guessbutton").click(function(){
	// $('#feedback').hide('Make your Guess');
	// $('#feedback').append('<h2>good guess!</h2>');
}
	
// Game should track how many guesses the user has made should appear in span#count
// Supply user with list of numbers they guessed so far
// Ensure users provide valid inputs between 1 - 100

});


