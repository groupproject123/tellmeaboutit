(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);



	function HomeController(HomeFactory,$state) {
		var vm = this;
		// vm.getReviews();
		HomeFactory.getReviews().then(function(res){

			console.log(res);
			vm.reviews = res;
			// $state.go('Home');

		});

	}
})();
