//backend logic
var total = 1;

var factorial = function(userInput) {
	for (var i = userInput; i > 0; i--) {
		total *= i;
	};
	return total;
}


// user interface logic
$(function() {
	$("form#calc").submit(function(event) {
    event.preventDefault();
    var number = Math.abs(parseInt($("input#factorialInput").val()));
		factorial(number);

    alert(total);
  });
});
