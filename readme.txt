Usage: Default Configuration
--------------------------------------------------
$('#carousel').carousel (
	// Class and Id variables
	'stageId': 					'stage',
	'stageContentClass': 		'stage-content', 
	'onDeckId': 				'on-deck',               
	'onDeckContentClass': 		'on-deck-content', 
	
	// Rotation variables
	'delay': 					5000,
	'fadeSpeed':			    'fast'
);

HTML Example:
--------------------------------------------------
<div id="carousel"> 
 	<div id="stage">
		<div class="stage-content">
			<img src="http://www.dummyimage.com/522x320" /> 
			<p>item 1 stage</p>      
		</div><!-- .stage-content -->
		<div class="on-deck-content">
			<img src="http://www.dummyimage.com/380x100" /> 
			<p>item 1 on deck</p> 
		</div><!-- .on-deck-content -->    
	</div>        
	<ul id="on-deck">
 		<li>
			<div class="stage-content">
				<img src="http://www.dummyimage.com/522x320" />   
				<p>item 2 stage</p>    
			</div><!-- .stage-content -->
			<div class="on-deck-content">
				<img src="http://www.dummyimage.com/380x100" />      
				<p>item 2 on deck</p> 
			</div><!-- .on-deck-content -->    
		</li>
		<li>
			<div class="stage-content">
				<img src="http://www.dummyimage.com/522x320" />
				<p>item 3 stage</p> 
			</div><!-- .stage-content -->
			<div class="on-deck-content">
				<img src="http://www.dummyimage.com/380x100" />           
				<p>item 3 on deck</p>  
			</div><!-- .on-deck-content -->    
		</li>
		<li>
			<div class="stage-content">
				<img src="http://www.dummyimage.com/522x320" />      
				<p>item 4 stage</p>    
			</div><!-- .stage-content -->
			<div class="on-deck-content">
				<img src="http://www.dummyimage.com/380x100" />
				<p>item 4 on deck</p>  
			</div><!-- .on-deck-content -->    
		</li>
	</ul><!-- .on-deck -->   
</div><!-- .carousel -->