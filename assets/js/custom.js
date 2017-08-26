$(document).ready(function(){

/* NAV CHANGE COLOR ANIMATION */
 $(window).scroll(function(){
	      if ($(this).scrollTop()) {
	          $('.navbar-fixed-top').attr('style','background-color: #4A586B !important; transition: all 0.5s ease-out !important; padding: 0px !important;');
	      
	      } else {
	         $('.navbar-fixed-top').attr('style','background-color: transparent !important; transition: all 0.5s ease-out !important'); 
	      }
  });


/* ANIMATE ON SCROLL */
$(document).on('click','.nav-link',function(e){
    $('html, body').animate({scrollTop: $( $(this).attr('href') ).offset().top}, 'slow');
     e.preventDefault();
});

/* SCROLL ARROW */
$(document).on('click','#pointer',function(e){
    $('html, body').animate({scrollTop: $('#projects').offset().top}, 'slow');
     e.preventDefault();
});

/* TYPING ANIMATION */
var typed = new Typed("#title", {
  // Waits 1000ms after typing "First"
  strings: ["Hi, I'm Jack Owen...", "I like web stuff..."],
  typeSpeed: 100,
	  backSpeed: 100,
	  loop: true,
	  showCursor: false,
	  backDelay: 400,
  smartBackspace: true // Default value
});

/* SCROLL ARROW PULSE */
var pulsing = setInterval(function(){$('#pointer').toggleClass('pointer-inverse')}, 1000);

// remove pulse
 $('#pointer').click(function(){
 	clearInterval(pulsing);
 })

	
})