/** 
 * Provides a carousel that can be rotated
 * @author Jason Gillespie
 * @date 9/15/2010
 * @version 0.1
         
*/

(function($) {  
	var defaults = {      
		// Class and Id variables
		'stageId': 					'stage',
		'stageContentClass': 		'stage-content', 
		'onDeckId': 				'on-deck',               
		'onDeckContentClass': 		'on-deck-content', 
		
		// Rotation variables
    	'delay': 					5000,
  		'fadeSpeed':			    'fast'
	};
	
	$.fn.carousel = function (options) {    
	   
		return this.each(function () {
			                                         
			$carousel = new Object();
			
			// Some initialization of $carousel properties  
			$carousel.container = $(this);  
			$carousel.settings = $.extend(defaults, options);
			$carousel.stage = $carousel.container.find('#'+$carousel.settings.stageId);
			$carousel.onDeck = $carousel.container.find('#'+$carousel.settings.onDeckId);
			$carousel.onDeck.count = $carousel.onDeck.find('li').size();  
			
			// Initially hide "stage" content in "on-deck" list, and hide "on-deck" content in "stage" area
			$carousel.stage.find('.'+$carousel.settings.onDeckContentClass).hide();
			$carousel.onDeck.find('.'+$carousel.settings.stageContentClass).hide();
			
			// Spin the carousel
			setTimeout(function () {$.rotate($carousel)}, $carousel.settings.delay);        
		});
                                        
	};
	
	
	// Recursive method to rotate the carousel
	$.rotate = function ($carousel) {        
  	
		var stage_old = $carousel.stage.clone();   
		var onDeck_old = $carousel.onDeck.clone();
		 
		// Rotate stage content 
		$carousel.stage.fadeOut($carousel.settings.fadeSpeed, function() { 
			
			$(this).html(onDeck_old.children('li:last').html());    
			
		 	// Hide/Show stage/ondeck content  
			$(this).find('.'+$carousel.settings.onDeckContentClass).hide();
			$(this).find('.'+$carousel.settings.stageContentClass).show(); 
			$(this).fadeIn();   
			        
		}); 
		   
		// Rotate on deck content
		$carousel.onDeck.children().fadeOut($carousel.settings.fadeSpeed, function () {  
			
			$carousel.onDeck.children(':nth-child(1)').html(stage_old.html()); 
			
			$carousel.onDeck.children().each(function (index, value) {
				if(index == 0) {
					$(this).html(stage_old.html());
				}
				else {
					$(this).html(onDeck_old.children(':nth-child('+(index)+')').html());
				}
			});	

			// Hide/Show stage/ondeck content  
			$carousel.onDeck.find('.'+$carousel.settings.onDeckContentClass).show();
			$carousel.onDeck.find('.'+$carousel.settings.stageContentClass).hide(); 

			$carousel.onDeck.children().fadeIn();
		});
		    
		setTimeout(function () {$.rotate($carousel)}, $carousel.settings.delay);
   	}
	
})(jQuery);
