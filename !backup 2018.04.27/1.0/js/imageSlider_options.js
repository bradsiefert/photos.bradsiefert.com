$(document).ready(function() {
	$(function() {
	var index = 0, hash = window.location.hash;
	if (hash) {
		index = /\d+/.exec(hash)[0];
		index = (parseInt(index) || 1) - 1;
		}
		$('#slideshow').cycle({
			fx: 'fade',
			speed: 'slow',
			timeout: 0,
			next: '.next_btn', 
			prev: '.prev_btn',
			startingSlide: index,
			after: onAfter
		});
	});
	function onAfter(curr,next,opts) {
		window.location.hash = opts.currSlide + 1;
		var caption = (opts.currSlide + 1) + ' of ' + opts.slideCount;
	$('#caption').html(caption);
	$('#count').html(this.alt);
	}
});

$(function(){    
	$('body').keydown(function(e){
	    if ( e.which == 37 ) { // left    
	        $('.prev_btn').click();    
	    }
	    else if ( e.which == 39 ) { //right
	        $('.next_btn').click();    
	    }
	});
});