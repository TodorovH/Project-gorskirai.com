var app = angular.module('ForestParadiseApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/location', {
		templateUrl: 'templates/location.html',
		controller: 'LocationController'
	});
	$routeProvider.when('/extras', {
		templateUrl: 'templates/extras.html',
		controller: 'ExtrasController'
	});
	$routeProvider.when('/gallery', {
		templateUrl: 'templates/gallery.html',
		controller: 'GalleryController'
	});
	$routeProvider.when('/contacts', {
		templateUrl: 'templates/contacts.html',
		controller: 'ContactsController'
	});
	$routeProvider.otherwise({
        redirectTo: '/'
      });
}]);