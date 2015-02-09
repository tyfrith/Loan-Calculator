var app = angular.module('LoanCalculator');

app.service('BankService', function($http) {
	
	this.getIntRate = function() {
	return $http({
		method: 'GET',
		url: '/api/interest_rate'   // using just '/interest_rate goes straight to interest rate endpoint
	}).then(function(res){
		return res.data;
	})
   }	
});





