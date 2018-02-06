$(function(){
	function 
		sliderauto()
		{
			var first_item = $('.slider__items').find('.slider__item:nth-child(1)');
			var clone = first_item.clone();
			first_item.remove();
			clone.appendTo('.slider__items');
	}
	var autoplay = setInterval(sliderauto,5000);
	$(document).ready(function(){
		autoplay;
	});
	
	$('.slider').mouseenter(function(){
		clearInterval(autoplay);
	}).mouseleave(function(){
		autoplay = setInterval(sliderauto,5000);
	});
});




/*$(document).ready(function {
	 setInterval(function(){
			var first_item = $('.slider__items').find('.slider__item:nth-child(1)');
			var clone = first_item.clone();
			first_item.remove();
			clone.appendTo('.slider__items');
		},5000);
	
		
	
});*/
	
	/*$('.slider').mouseover(function(){
		clearInterval(autoplay);
	
	
	
});*/
	
	$(document).on('click','.next',function(){
		var first_item = $('.slider__items').find('.slider__item:nth-child(1)');
		var clone = first_item.clone();
		first_item.remove();
		clone.appendTo('.slider__items');
		
		
	});
	$(document).on('click','.prev',function(){
		var first_item = $('.slider__items').find('.slider__item:last-child');
		var clone = first_item.clone();
		first_item.remove();
		clone.prependTo('.slider__items');
		
		
	});
	
	