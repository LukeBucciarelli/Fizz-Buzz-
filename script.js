$(document).ready(function() {
 
	var $body = $('body');

  alert("let's play FizzBuzz!");  
 

// my fizzbuzz program

	for (var i = 0; i <= 100; i++) {

		if (i % 3 == 0 && i % 5 == 0) {
			$body.append('<div>FizzBuzz</div>');
		}
		else if (i % 3 == 0) {
			$body.append('<div>Fizz</div>');
		}
		else if (i % 5 == 0) {
			$body.append('<div>Buzz</div>');
		}
		else {
			$body.append('<div>' + i + '</div>');
		}
	}
});



