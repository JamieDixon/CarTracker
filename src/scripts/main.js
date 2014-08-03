requirejs.config({
	baseUrl : '',
	paths : {
		modules : 'scripts/modules',
		async : 'lib/async',
		angular: 'lib/angular.min'
	},

	shim : {
		angular : { exports : 'angular' }
	}

});

define('gmaps', ['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCm7tzu8_yxtQtXoiEYHH9tsuupVevtRu4'], function (){
	return window.google.maps;
});

require(['modules/index']);