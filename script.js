$(document).ready(function() {
 
	var $body = $('body');

  var $inputField = $('.inputitem');
  var $fizzBuzzButton = $('.fizzBuzzButton');
  
  $fizzBuzzButton.click(function() {
  	var inputValue = $inputField.val();
  	var parsedValue = parseInt(inputValue);
  	console.log(parsedValue);

  	if(isNaN(parsedValue)) {
  		alert("Error: not a number");
  	}
  	else if (parsedValue% 3 == 0) {
		$body.append('<div>Fizz</div>');
	}
	else if (parsedValue% 5 == 0) {
		$body.append('<div>Buzz</div>');
	}
	else {
		$body.append('<div>' + parsedValue + '</div>');
	}
  });
});



