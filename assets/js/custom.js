$(document).ready(function(){

	$('.nav-link').click(function(e){
		

	    $('html, body').animate({scrollTop: $( $(this).attr('href') ).offset().top}, 'slow');

	      return false;
	});


})