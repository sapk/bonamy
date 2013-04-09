b.home = {
	"init" : function(){
		b.db.init();
		b.ui.init();
		
		if(!navigator)
			navigator.splashscreen.hide();
	}
};
