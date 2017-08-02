$(document).ready(function() {
	
 
    $(window).scroll( function(){
    
        $('.hideme1').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);
                    
            }
            
        }); 
		
    
    });
	
	
	$(".circle-thumb").mouseenter(function() {
		$(this).fadeTo("fast", 1);
	});
	
	$(".circle-thumb").mouseleave(function() {
		$(this).fadeTo("fast", 0.5);
	});
	
	
	$("#footer a").mouseenter(function() {
		$(this).css("letter-spacing","1px");
		$(this).css("font-weight","700");
	});
	
	$("#footer a").mouseleave(function() {
		$(this).css("letter-spacing","0px");
		$(this).css("font-weight","400");
	});
	
	
    
});