$(document).ready(function(){

	function hasNoValue(val) {
		if(val.length === 0) {
			alert("Please insert the missing value");
			return true;
		} else {
			return false;
		}
	}

	function isNotNumber(val) {
		if($.isNumeric(val)) {
			return false;
		} else {
			alert(val + " is not a number");
			return true;
		}
	}

	function isNotInt(val) {
		if (val % 1 === 0) {
			return false;
		} else {
			alert(val + " is not an integer.  Please enter a whole number.");
			return true;
		}
	}


	$('button').on('click', function() {

		var x = $('.xInt').val().toString();
		var y = $('.yInt').val().toString();

		if(hasNoValue(x)) {
			return;
		} else if (hasNoValue(y)) {
			return;
		}

		if (isNotNumber(x)) {
			return;
		} else if (isNotNumber(y)) {
			return;
		}



		x = parseFloat($('.xInt').val());
		y = parseFloat($('.yInt').val());

		if (isNotInt(x)) {
			return;
		} else if (isNotInt(y)) {
			return;
		}
		

		var o;
		var z;

		if ($(this).hasClass('plusOperator')) {
			o = " Plus ";
			z = x + y ;
		} else {
			o = " Minus ";
			z = x - y ;
		}

		$('.output').text(x + o + y + " is " + z);
	});


});