
$(document).ready(function(){
	var randomNumber = 0;
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

	});

	// Start a new game on clicking of "new game"  
	function newGame () {
		return Math.floor((Math.random() * 100) + 1);
	}
	// Supply user with list of numbers they guessed so far
	$('#guessButton').click(function(event) {
		event.preventDefault();
		var userGuess = $('#userGuess').val();
		alert(userGuess);
		$('input[type="text"]').val('');

	// Ensure users provide valid inputs between 1 - 100
	var userGuess = $('#userGuess').val(''); 
		if (userGuess > 100) {
		alert("Please guess a number between 1 and 100!");
	}
	// Game should track how many guesses the user has made should appear in span#count
    var counter = $('#count').val();
    	counter++;
    	alert(counter);
    $('#count').append('counter');

});
	

}); 

	// User should get feedback in each guess - choose your own ranges
<<<<<<< HEAD
	// $("#guessbutton").click(function(){
	// $('#feedback').hide('Make your Guess');
	// $('#feedback').append('<h2>good guess!</h2>');
}
=======
// 	$("#guessbutton").click(function(){
// 	$('#feedback').hide('Make your Guess');
// 	$('#feedback').append('<h2>good guess!</h2>');
// }
>>>>>>> master
	





