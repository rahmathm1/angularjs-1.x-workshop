
	var app = angular.module('app', ['ngRoute','ngResource']);
	
	app.config(function($routeProvider, $httpProvider) {		

		$httpProvider.defaults.headers.put['Content-Type'] = 'application/json';

		$routeProvider.when('/students',{
			templateUrl : 'views/students.html',
			controller: 'StudentsController'
		});		
		$routeProvider.otherwise({
			redirectTo: '/students'
		});
		
	});	