$(document).ready(function(){

	$(document).on('click','.nav-link',function(e){
		
	    $('html, body').animate({scrollTop: $( $(this).attr('href') ).offset().top}, 500);
	     
	     e.preventDefault();
	});


})