b.ui = {
	"init" : function(){
		// Chargement du theme-selector
		$("body").attr("class",b.db.data.params.theme);
		// Correction du au margind u header et taile 100% du contenaur.
		$('.swiper-container').height($('.swiper-container').height()-($(document).height()-$(window).height()+5));
		// initialisation du pluginqui gère les transitions.
		b.ui.swiper = new Swiper('.swiper-container', {
			"loop" : true,
			speed:400, 
			ratio: 1,
			"slidesPerSlide" : parseInt($('.swiper-container').width()/500)+1,
			"scrollbar": {
				container : '.swiper-scrollbar',
				hide: true,
				draggable : false
			},
			"keyboardControl" : true,
			"onSlideClick" : function(){
					//alert(b.ui.swiper.clickedSlideIndex);
					// Si c'est le slide de recherche on donne le focus à la barre de recherche.
					if(b.ui.swiper.clickedSlideIndex==2){
						$("#block-search>input").focus();
						//b.ui.swiper.swipeTo(2,0,true);
					}
			},
			"onSlideChangeEnd": function(){
					b.ui.swiper.params.ratio=(1-0.14*b.ui.swiper.activeSlide);
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
	},
	"set"  : {
		"theme" : function(selector){
			b.db.data.params.theme=selector;
			$("body").attr("class",selector);
			b.db.save();
		}
	}
};
