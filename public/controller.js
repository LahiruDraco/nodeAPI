var app = angular.module('SampleApp', []);

app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
	console.log("From Controller");

	person1 = {
		name: 'Test1', 
		email: 'test@test.com',
		num: '011111111'
	};

	person2 = {
		name: 'Test2',
		email: 'test2@test.com',
		num: '011111112'
	};

	person3 = {
		name: 'Test3',
		email: 'test3@test.com',
		num: '011111112'
	};

	var contactlist = [person1, person2, person3];
	
	$scope.contactlist = contactlist;
	
	console.log(contactlist);

}]);
