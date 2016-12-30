$(document).ready(function(){


	$('.social-icon').each(function(i){
		setTimeout(function(){
			$('.social-icon').eq(i).addClass('is-visible');
		}, 200 * i);
		
	})
})