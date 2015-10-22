
$(document).ready(function(){
	var randomNumber = newGame();
	var counter = 0;

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

	// clear field on clicking of "new game" 
		$('input[type="text"]').val('');

	// clear field on clicking of "new game" 
		$('#count').text('0');

	// clear field on clicking of "new game" 
		$('#guessList').empty('');

	});

	// Start a new game on clicking of "new game"  
	function newGame () {
		var localRandom = Math.floor((Math.random() * 100) + 1);
		console.log(localRandom);
		return localRandom;
	}

	// function checkTemp(userGuess) {
	// 	alert('checkTemp userGuess' + userGuess);

	// 	var difference + Math.abs(userGuess - randomNumber);
	// 	if (difference ==0) {
	// 		alert('Correct');
	// 	} else if (difference < 10) {
	// 		alert('Getting Warm');
	// 	} else if (difference < 20) {
	// 		alert('Getting Warmer');
	// 	}

	// }


	// Supply user with list of numbers they guessed so far
	$('#guessButton').click(function(event) {
		event.preventDefault();
		var userGuess = $('#userGuess').val();
		// alert(userGuess);
		$('input[type="text"]').val('');

	// Ensure users provide valid inputs between 1 - 100
		if (userGuess > 100) {
		alert("Please guess a number between 1 and 100!");
	}
	// Game should track how many guesses the user has made should appear in span#count
	// Game should track the guess values as list items 
    	counter++;
    	// alert(counter);
    	$('#count').text(counter);
    	$('#guessList').append('<li>' + userGuess + '</li>');


    	// checkTemp(userGuess);

});
	

}); 

	// User should get feedback in each guess - choose your own ranges
// <<<<<<< HEAD
	// $("#guessbutton").click(function(){
	// $('#feedback').hide('Make your Guess');
	// $('#feedback').append('<h2>good guess!</h2>');
// }
// =======

// >>>>>>> master
	





