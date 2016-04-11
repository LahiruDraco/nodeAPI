var app = angular.module('SampleApp', []);

app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
	console.log("From Controller");

	var refresh = function () {
		$http.get('/contactlist').success(function (response) {
			console.log("I got the data requested");
			$scope.contactlist = response;
			$scope.contact = '';
		});
	};

	refresh();

	$scope.addContact = function () {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function (response) {
			console.log(response);
			refresh();	
		});
	};
	
	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/'+id).success(function(response){
			refresh();
		});
	}

}]);
