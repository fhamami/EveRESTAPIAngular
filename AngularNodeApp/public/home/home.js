'use strict';

angular.module('home', ['ngRoute'])

.config([$routeProvider, function($routeProvider) {
	$routeProvider.when('/home', {
		tempelateUrl: '../home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', [function() {

}]);