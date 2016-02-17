angular.module('myApp.controllers', ['ionic'])

.controller('questionCtrl', function($state,$scope) {
	$scope.nome = "vinicius";
	$scope.calculate = function(data){
		var gas = $scope.data.gas;
		var ethanol = $scope.data.ethanol;
		alert('gas : ' + gas + ' , ethanol : '+ ethanol);
	};
});
