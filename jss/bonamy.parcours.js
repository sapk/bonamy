b.parcours = {
	"init" : function(){

		b.db.init();
		b.ui.init();
		
		if(!navigator)
			navigator.splashscreen.hide();
		$('#map').height($(document).height()-180);
		
		var map = L.map('map', {
			center: [47.219401, -1.543601],
			zoom: 17
		});
		/*
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		*/
		//92634
		//http://b.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/1@2x/256/15/17599/10746.png
		L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
			key: '8ee2a50541944fb9bcedded5165f09d9',
			styleId: 1
		}).addTo(map);
		
	}
};
