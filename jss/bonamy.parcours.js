b.parcours = {
	"init" : function(){

		b.db.init();
		b.ui.init();
		
		if(!navigator)
			navigator.splashscreen.hide();
		$('#map').height($(document).height()-180);
		$('#img').css('overflow' , "hidden");
		$('#img').css('max-height' , $(document).height()-180);
		
		b.parcours.map = L.map('map', {
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
		}).addTo(b.parcours.map);
		
		b.parcours.marker = L.marker([47.219401, -1.543601],{icon:  L.icon({
				iconUrl: '../../../img/dora.png',
				iconSize: [50, 50],
				iconAnchor: [25, 50]
			})});
			
		b.parcours.watchID = navigator.geolocation.watchPosition(
			b.parcours.onSuccess, b.parcours.onError, 
			{ timeout: 30000 });
			
		b.parcours.marker.addTo(map);
	},
	
	
	onSuccess : function (position) {
		b.parcours.marker.setLatLng([position.coords.latitude,position.coords.longitude])
		b.parcours.marker.setView([position.coords.latitude,position.coords.longitude], 17)
	},

onError : function (error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

	
	
};
