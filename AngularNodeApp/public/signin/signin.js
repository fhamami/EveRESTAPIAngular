'use strict';

angular.module('singin', ['base64','ngRoute','myAppService'])

.config(['routeProvider', function($routeProvider) {
	$routeProvider.when('/signin', {
		templateUrl: '/signin/signin.html',
		controller: 'SignInCtrl'
	});
}])

.controller('SignInCtrl', ['$scope','$http','$base64',function($scope,$http,$base64){
}]);

$scope.signIn = function() {
	var username = $scope.username;
	var password = $scope.password;

	var authdata = $base64.encode(username + ':' + password);

	$http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"};
	$http.defaults.headers.common = {"Access-Control-Expose-Headers": "Origin, X-Requested-With, Content-Type, Accept"};
	$http.defaults.headers.common["Cache-Control"] = "no-cache";
	$http.defaults.headers.common.Pragma = "no-cache";
	$http.defaults.headers.common['Authorization'] = 'Basic '+authdata;

	$http({
		method: 'GET',
		url: 'http://127.0.0.1:5000/user/' + username
	}).
	success(function(data, status, headers, config) {
		console.log(data);
	}).
	error(function(data, status, headers, config) {
		console.log(data, status);
	});
}