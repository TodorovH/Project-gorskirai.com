app.controller('GalleryController', ['$scope', function($scope){

	$scope.galleryPage = 'galleryPage';
	$scope.galleryContainer = 'galleryContainer';
	$scope.containerSlider = 'containerSlider';
	$scope.arrow = 'arrow';
	$scope.arrowVisible = 'arrowVisible';
	$scope.prev = 'prev';
	$scope.nextImg = 'nextImg';
	$scope.isVisible = false;

	$scope.setIsVisibleToTrue = function () {
		$scope.isVisible = true;
	}

	$scope.setIsVisibleToFalse = function () {
		$scope.isVisible = false;
	}

    $scope.photos = [
        {image: '../images/img01.jpg', desc: 'Image 01'},
		{image: '../images/img02.jpg', desc: 'Image 02'},
		{image: '../images/img03.jpg', desc: 'Image 03'},
		{image: '../images/img04.jpg', desc: 'Image 04'},
		{image: '../images/img05.jpg', desc: 'Image 05'},
		{image: '../images/img06.jpg', desc: 'Image 06'},
		{image: '../images/img07.jpg', desc: 'Image 07'},
		{image: '../images/img08.jpg', desc: 'Image 08'},
		{image: '../images/img09.jpg', desc: 'Image 09'},
		{image: '../images/img10.jpg', desc: 'Image 10'},
		{image: '../images/img11.jpg', desc: 'Image 11'},
		{image: '../images/img12.jpg', desc: 'Image 12'},
		{image: '../images/img13.jpg', desc: 'Image 13'},
		{image: '../images/img14.jpg', desc: 'Image 14'},
		{image: '../images/img15.jpg', desc: 'Image 15'},
		{image: '../images/img16.jpg', desc: 'Image 16'},
		{image: '../images/img17.jpg', desc: 'Image 17'},
		{image: '../images/img18.jpg', desc: 'Image 18'},
		{image: '../images/img19.jpg', desc: 'Image 19'},
		{image: '../images/img20.jpg', desc: 'Image 20'},
		{image: '../images/img21.jpg', desc: 'Image 21'},
		{image: '../images/img22.jpg', desc: 'Image 22'},
		{image: '../images/img23.jpg', desc: 'Image 23'},
		{image: '../images/img24.jpg', desc: 'Image 24'},
		{image: '../images/img25.jpg', desc: 'Image 25'},
		{image: '../images/img26.jpg', desc: 'Image 26'},
		{image: '../images/img27.jpg', desc: 'Image 27'},
		{image: '../images/img28.jpg', desc: 'Image 28'},
		{image: '../images/img29.jpg', desc: 'Image 29'},
		{image: '../images/img30.jpg', desc: 'Image 30'},
		{image: '../images/img31.jpg', desc: 'Image 31'},
		{image: '../images/img32.jpg', desc: 'Image 32'},
		{image: '../images/img33.jpg', desc: 'Image 33'},
		{image: '../images/img34.jpg', desc: 'Image 34'},
		{image: '../images/img35.jpg', desc: 'Image 35'},
		{image: '../images/img36.jpg', desc: 'Image 36'},
		{image: '../images/img37.jpg', desc: 'Image 37'},
		{image: '../images/img38.jpg', desc: 'Image 38'},
		{image: '../images/img39.jpg', desc: 'Image 39'},
		{image: '../images/img40.jpg', desc: 'Image 40'},
		{image: '../images/img41.jpg', desc: 'Image 41'},
		{image: '../images/img42.jpg', desc: 'Image 42'},
		{image: '../images/img43.jpg', desc: 'Image 43'},
		{image: '../images/img44.jpg', desc: 'Image 44'},
		{image: '../images/img45.jpg', desc: 'Image 45'},
		{image: '../images/img46.jpg', desc: 'Image 46'},
		{image: '../images/img47.jpg', desc: 'Image 47'},
		{image: '../images/img48.jpg', desc: 'Image 48'},
		{image: '../images/img49.jpg', desc: 'Image 49'},
		{image: '../images/img50.jpg', desc: 'Image 50'},
		{image: '../images/img51.jpg', desc: 'Image 51'},
		{image: '../images/img52.jpg', desc: 'Image 52'},
		{image: '../images/img53.jpg', desc: 'Image 53'},
		{image: '../images/img54.jpg', desc: 'Image 54'},
		{image: '../images/img55.jpg', desc: 'Image 55'},
		{image: '../images/img56.jpg', desc: 'Image 56'},
		{image: '../images/img57.jpg', desc: 'Image 57'},
		{image: '../images/img58.jpg', desc: 'Image 58'},
		{image: '../images/img59.jpg', desc: 'Image 59'},
		{image: '../images/img60.jpg', desc: 'Image 60'},
		{image: '../images/img61.jpg', desc: 'Image 61'},
		{image: '../images/img62.jpg', desc: 'Image 62'},
		{image: '../images/img63.jpg', desc: 'Image 63'},
		{image: '../images/img64.jpg', desc: 'Image 64'},
		{image: '../images/img65.jpg', desc: 'Image 65'},
		{image: '../images/img66.jpg', desc: 'Image 66'},
		{image: '../images/img67.jpg', desc: 'Image 67'},
		{image: '../images/img68.jpg', desc: 'Image 68'},
		{image: '../images/img69.jpg', desc: 'Image 69'},
		{image: '../images/img70.jpg', desc: 'Image 70'},
		{image: '../images/img71.jpg', desc: 'Image 71'},
		{image: '../images/img72.jpg', desc: 'Image 72'},
		{image: '../images/img73.jpg', desc: 'Image 73'},
		{image: '../images/img74.jpg', desc: 'Image 74'},
		{image: '../images/img75.jpg', desc: 'Image 75'},
		{image: '../images/img76.jpg', desc: 'Image 76'},
		{image: '../images/img77.jpg', desc: 'Image 77'},
		{image: '../images/img78.jpg', desc: 'Image 78'},
		{image: '../images/img79.jpg', desc: 'Image 79'},
		{image: '../images/img80.jpg', desc: 'Image 80'},
		{image: '../images/img81.jpg', desc: 'Image 81'},
		{image: '../images/img82.jpg', desc: 'Image 82'},
		{image: '../images/img83.jpg', desc: 'Image 83'},
		{image: '../images/img84.jpg', desc: 'Image 84'},
		{image: '../images/img85.jpg', desc: 'Image 85'},
		{image: '../images/img86.jpg', desc: 'Image 86'},
		{image: '../images/img87.jpg', desc: 'Image 87'},
		{image: '../images/img88.jpg', desc: 'Image 88'},
		{image: '../images/img89.jpg', desc: 'Image 89'},
		{image: '../images/img90.jpg', desc: 'Image 90'},
		{image: '../images/img91.jpg', desc: 'Image 91'},
		{image: '../images/img92.jpg', desc: 'Image 92'},
		{image: '../images/img93.jpg', desc: 'Image 93'},
		{image: '../images/img94.jpg', desc: 'Image 94'},
		{image: '../images/img95.jpg', desc: 'Image 95'},
		{image: '../images/img96.jpg', desc: 'Image 96'},
		{image: '../images/img97.jpg', desc: 'Image 97'},
		{image: '../images/img98.jpg', desc: 'Image 98'},
		{image: '../images/img99.jpg', desc: 'Image 99'},
		{image: '../images/img100.jpg', desc: 'Image 100'},
		{image: '../images/img101.jpg', desc: 'Image 101'},
		{image: '../images/img102.jpg', desc: 'Image 102'},
		{image: '../images/img103.jpg', desc: 'Image 103'}
    ];

 
    $scope._Index = 0;

    $scope.isActive = function (index) {
	        return $scope._Index === index;
	    };
 
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
 
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };
 
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
}]);