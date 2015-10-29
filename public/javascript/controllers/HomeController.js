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
<<<<<<< HEAD
		});

		//DELETE Review from the database.
		vm.deleteReview = function(reviewId){
			HomeFactory.deleteReview(reviewId).then(function(){
				vm.reviews.splice(vm.reviews.indexOf(reviewId), 1);
=======

		});
//HomeFactory.editReview({IDofreviewToEdit:reviewId,reviewEditted:vm.newReview}).then(function(res){

		vm.editReview = function(){
			console.log("HomeController");

			HomeFactory.editReview(vm.newReview, $stateParams.id).then(function(res){
				console.log("Im here.");
				console.log(res);
				vm.newReview= null;
				$state.go('Home');
>>>>>>> 5861a7b41ac0d9de3c22bcbca8bc34e540f8e14d
			});
		};

	}
})();
