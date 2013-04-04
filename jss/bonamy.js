var b = {
	"init" : function(){
		b.swiper = new Swiper('.swiper-container', {
		//	"loop" : true,
			"slidesPerSlide" : parseInt($('.swiper-container').width()/500)+1,
		});
		$(window).resize(function() {
			b.swiper.params.slidesPerSlide=parseInt($('.swiper-container').width()/500)+1;
			b.swiper.reInit() 
			console.log(b.swiper.params)
		});
		
		navigator.splashscreen.hide();
	}
};
