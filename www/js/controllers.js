angular.module('myApp.controllers', ['ionic'])

.controller('questionCtrl', function($state, $scope, $ionicPopup) {
	$scope.calculate = function(data){
		if(data == undefined){
			var alertPopup = $ionicPopup.alert({
				title: 'Complete os Campos',
	            template: 'Por favor, complete os campos corretamente!'
	            });	
			$state.go('question');  
		}
		else {
			var gas = $scope.data.gas;
			var ethanol = $scope.data.ethanol;
			var div = ethanol / gas;

			if( div.toFixed(2) < 0.7 ){
				var resp = 'Ethanol';
			}
			else{
				var resp = 'Gasoline';
			}
			$scope.answer = resp;
		}
	};
});
