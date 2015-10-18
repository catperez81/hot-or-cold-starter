
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

	// Generate secret number between 1 and 100
	$('.new').click(function(){	
		randomNumber = newGame();
		console.log(randomNumber);
	// clear field on new game
		$('input[type="text"]').val('');
	});

	// Start a new game on clicking of "new game" button
	function newGame () {
		return Math.floor((Math.random() * 100) + 1);
	}
	
	// Game should track how many guesses the user has made should appear in span#count
	$('.guessButton').click(function() {
    var counter = $('span#count').val();
    counter++;
    $('.guessButton').val(counter);
	});


}); 

	// $('<input type="text" class = "text'+ (++i) +'" onclick="this.value=\'\'" value="Enter Choice #' + i + '"/>');
	// });


	// $('.new').click(function(){
	// $('#userGuess').remove();	
	// });

	// User should get feedback in each guess - choose your own ranges
// 	$("#guessbutton").click(function(){
// 	$('#feedback').hide('Make your Guess');
// 	$('#feedback').append('<h2>good guess!</h2>');
// }
	

// Supply user with list of numbers they guessed so far
// Ensure users provide valid inputs between 1 - 100



