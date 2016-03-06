app.controller('LocationController', ['$scope', function($scope){
	$scope.locationPage = 'locationPage';
	$scope.locationTextContainer = 'locationTextContainer';

	var initializeFun = function () {
		initialize();
	};

	initializeFun();
}]);