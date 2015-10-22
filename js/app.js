
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
	// User should get feedback in each guess - choose your own ranges
	function checkTemp(userGuess) {
		// alert('checkTemp userGuess' + userGuess);

		var difference = Math.abs(userGuess - randomNumber);
		if (difference == 0) {
			alert('Awesome! You guessed right!');
		} else if (difference < 10) {
			alert('Getting Warm');
		} else if (difference < 20) {
			alert('Getting Warmer');
		} else if (difference < 30) {
			alert('Getting Cool');
		} else if (difference < 40) {
			alert('Getting Cooler');
		} else if (difference < 50) {
			alert('Cold');
		} else if (difference < 60) {
			alert('Colder');
		} else if (difference < 70) {
			alert('Really Cold');
		} else if (difference < 80) {
			alert('Freezing');
		}

	}

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


    	checkTemp(userGuess);

});
	

}); 

	





