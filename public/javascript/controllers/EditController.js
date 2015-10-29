(function() {
	'use strict';
	angular.module('app')
	.controller('EditController', EditController);
	function EditController(HomeFactory, $state, $stateParams) {
		var vm = this;
		vm.newReview = {};

    // console.log($stateParams.id);
    // if(!$stateParams.id){
    //   console.log("Didn't find the id");
    // }else{
    //   HomeFactory.getReviews($stateParams.id).then(function(res){
    //     vm.newReview = res;  //the newReview can be named different, because I'm deffined it here to use it later.
    //   });
    // }

		//
    vm.editReview = function(){
      console.log(vm.newReview);
      HomeFactory.editReview(vm.newReview).then(function(res){
				$state.go("Home");

      });
    };

// This works with the edit button on the Home.html
		// vm.startEdit = function(editReviewId){
		// 	for(var edit = 0; edit < vm.reviews.length; edit++){
		// 	if(vm.reviews[edit]._id === editReviewId){ //This means both of these Id's are equals.
		// 	vm.takeToEdit = vm.reviews[edit];
		// 	break;
    //      }
		// 	}
		// 	$state.go('EditReview');
		// };



	}
})();
