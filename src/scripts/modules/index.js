
define(['angular', 'gmaps'], function(ng, gmaps) {
	var appModule = ng.module('foo', []);

	appModule.controller('IndexController', function () {
		this.bob = "I am bob";
	});

	function initMap(){

		var mapOptions = {
			center : new gmaps.LatLng(52.213823, -0.0596995),
			zoom : 16
		};

		var map = new gmaps.Map(document.getElementById('map-canvas'), mapOptions);

		console.log("Mapping");
	}

	initMap();

	return appModule;
});