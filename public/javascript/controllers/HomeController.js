(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
//  HomeController.$inject = ["HomeFactory", "$state"]; //Inject dependenci
	function HomeController(HomeFactory, $state, $stateParams) {
		var vm = this;
		vm.newReview = {};


		HomeFactory.getReviews().then(function(res){
			//console.log(res);
			vm.reviews = res;

		});
//HomeFactory.editReview({IDofreviewToEdit:reviewId,reviewEditted:vm.newReview}).then(function(res){

		vm.editReview = function(){
			console.log("HomeController");

			HomeFactory.editReview(vm.newReview, $stateParams.id).then(function(res){
				console.log("Im here.");
				console.log(res);
				vm.newReview= null;
				$state.go('Home');
			});
		};

	}
})();
