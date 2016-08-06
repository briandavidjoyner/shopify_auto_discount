(function(){
	var $config = {
		
		div_element : '<div id="promo_code_bar" style="position:fixed;height:0px;width:100%;z-index:10000;background-color:blue;"></div>',
		urls_to_exclude : ['/cart']

	}
	jQuery('body').prepend($config.div_element);
	jQuery('#promo_code_bar').animate({height: '+=100px'}, 500, function(){
		jQuery('#sidebar').animate({marginTop:'75px'});
		jQuery('#content').animate({marginTop:'75px'});
	});
})(); 