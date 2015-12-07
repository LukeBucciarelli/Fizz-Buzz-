$(document).ready(function() {
 
	var $li = $('li');

  var $inputField = $('.inputitem');
  var $fizzBuzzButton = $('.fizzBuzzButton');
  
  $fizzBuzzButton.click(function() {
  	var inputValue = $inputField.val();
  	
    var parsedValue = parseInt(inputValue);
  	console.log(parsedValue);

  	if(isNaN(parsedValue)) {
  		alert("Error: not a number");
    }
  	
    
    else if ((parsedValue%3 == 0) && (parsedValue%5 == 0)){
    $li.append('<li>FizzBuzz</li>');
    }

    else if (parsedValue% 3 == 0) {
		$li.append('<li>Fizz</li>');
	  }

	  else if (parsedValue% 5 == 0) {
		$li.append('<li>Buzz</li>');
	  }

    else {
		$li.append('<li>' + parsedValue + '</li>');
	  }

  });
});



