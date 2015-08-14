var artistControllers = angular.module('artistControllers', ['ngAnimate']);
						//(name , dependencies)
//this is going to hold the modules 
//going to have all the code for the application
//this practice is called namespacing, which protects the application code and makes sure that no other code will overlap within the website
//to use angular animation, set ngAnimate as a dependency


artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
//$scope is like a super variable that you can use to pass things from your JavaScript to your application and template, and vice-versa
//$http gives us access to the ACTP services, methods, and properties.
//putting scope and http (aswell as the rest of the function) in an array will help protect the variables against minification.

/*	$scope.author = {

		'name': 'Carlos Marra',
		'title': 'Web Developer',
		'company': 'Rockstar (Hopefully)'

	}
*/

//we put the Model in here because we want to do something with the data in our template, place it in the scope variable


//what we are doing here is asking the http service it to get some information from a JSON file
//grabs the data and puts in scope.artists
	$http.get('data.json').success(function(data) {
		$scope.artists = data;	
		$scope.artistOrder = 'name';	
	});

}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	
	$http.get('data.json').success(function(data) {
		$scope.artists = data;	
		$scope.whichItem = $routeParams.itemId;	//when someone is going to click on an artist, it will recieve the item.Id of said artist
  
		//kindof like a slideshow, adjusts the $routeParams.itemId so it cycles between the artists in the array
	    if ($routeParams.itemId > 0) {
	        $scope.prevItem = Number($routeParams.itemId)-1;
	    } else {
	        $scope.prevItem = $scope.artists.length-1;
	    }

	    if ($routeParams.itemId < $scope.artists.length-1) {
	        $scope.nextItem = Number($routeParams.itemId)+1;
	    } else {
	        $scope.nextItem = 0;
	    }
	});
}]);