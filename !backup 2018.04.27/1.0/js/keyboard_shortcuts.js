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