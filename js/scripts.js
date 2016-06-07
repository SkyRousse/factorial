$(function() {
	$("form#calc").submit(function(event) {
    event.preventDefault();

    var total = 1;
    var number = Math.abs(parseInt($("input#factorialInput").val()));
    //var number = parseInt($("input#number").val());
    for (var i = number; i > 0; i--) {
      total *= i;
    };
    alert(total);
  });
});
