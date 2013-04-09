b.parcours = {
	"init" : function(){

		b.forcenoloop=true;
		b.db.init();
		b.ui.init();
		
		if(!navigator)
			navigator.splashscreen.hide();
	}
};
