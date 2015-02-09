var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, BankService){
	
	BankService.getIntRate()
		.then(function(res){
			$scope.interest_rate = res;
		})

$scope.calculatePayment = function() {
	$scope.totalOwed = 
		Number($scope.principal) + ((parseInt($scope.interest_rate) / 100) * Number($scope.principal) * 4);
	$scope.monthly_payment = $scope.totalOwed / 48;
}

});
