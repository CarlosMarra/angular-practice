var myApp = angular.module('myApp', [
	'ngRoute',			//tell angular that we're using the ngRoute features that turn on Deep Linking for us
	'artistControllers' //specify the JavaScript that's going to handle this module, would match the name in the controllers.js document
	//
]);

//configure how the partials are going to run
myApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/list',{						//going to be what happens when somebody navigates to one of the paths in our file
		templateUrl: 'list.html',		//matching the document that we created
		controller: 'ListController'	//list controller is the name of the controller in the controllers.js document
	}).	
	when('/details/:itemId', {			//going to be what happens when somebody clicks on one of the artists to learn more about them
		templateUrl: 'details.html',	//the location of the template for the further information
		controller: 'DetailsController'	//the controller that will handle giving the appropriate information into the template
	}).
	otherwise({							//set up a default of what happens when somebody just goes to the homepage of the website
		redirectTo: '/list'
	})

}]);