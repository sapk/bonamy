var b = {
	"init" : function(){
		b.swiper = new Swiper('.swiper-container', {
			"loop" : true,
			speed:400, 
			ratio: 1,
			"slidesPerSlide" : parseInt($('.swiper-container').width()/500)+1,
			"scrollbar": {
				container : '.swiper-scrollbar',
				hide: true,
				draggable : false
			},
			"onSlideChangeEnd": function(){
					b.swiper.params.ratio=(1-0.14*b.swiper.activeSlide);
			}
		});
		//TODO A supprimer seulement pour le débug car trop de problème (décallage des slides) et inutile.
		// réfléchir pour chngement de sens surtout tablette.
		/*
		$(window).resize(function() {
			b.swiper.params.slidesPerSlide=parseInt($('.swiper-container').width()/500)+1;
			b.swiper.reInit()
		});
		*/
		navigator.splashscreen.hide();
	}
};
