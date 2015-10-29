(function() {
	'use strict';
	angular.module('app')
	.controller('DetailReviewController', DetailReviewController);
	function DetailReviewController(HomeFactory,$state, $stateParams) {

    var vm = this;
    vm.comment = {};
console.log(vm.comment);
		if(!$stateParams.id) $state.go('Home');//This means, is this Id exists, run the function inside.
		console.log($stateParams.id);
   HomeFactory.getReviewById($stateParams.id).then(function(res){
   vm.review = res;   //at this point I am creating a new variable.
   });

	 HomeFactory.getComments().then(function(allComment){
		 console.log(allComment);
		 vm.comments = allComment;
	 });

		vm.addComment = function(){
		//	console.log(vm.review._id);
		  HomeFactory.createComment(vm.review._id, vm.newComment).then(function(res){
				vm.newComment = {};
				vm.review.comments.push(res);
				$state.go('DetailReview');
		  });
		};


		vm.deleteComment = function(comment){
			console.log(comment);
		  vm.review.comments.splice(vm.review.comments.indexOf(comment), 1);
		  HomeFactory.deleteComment(comment);
		};

	}
})();
