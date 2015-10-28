(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
//  HomeController.$inject = ["HomeFactory", "$state"]; //Inject dependenci
	function HomeController(HomeFactory, $state) {
		var vm = this;





		HomeFactory.getReviews().then(function(res){
			//console.log(res);
			vm.reviews = res;

		});

	}
})();
